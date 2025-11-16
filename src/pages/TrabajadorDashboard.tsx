import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useIncidentes } from '../hooks/useIncidentes';
import { useToast } from '../components/common/ToastProvider';
import { IncidentTable } from '../components/incidents/IncidentTable';
import { IncidentDetailPage } from './IncidentDetailPage';
import { Tabs } from '../components/common/Tabs';
import { Button } from '../components/common/Button';
import { Loader } from '../components/common/Loader';
import type { Incidente } from '../types/incidentes';

type Vista = 'pendientes' | 'mis-casos';

export function TrabajadorDashboard() {
  const { user, token } = useAuth();
  const [vista, setVista] = useState<Vista>('pendientes');
  const { incidentes, loading, error, asignarIncidente, resolverIncidente, obtenerHistorial } = useIncidentes(
    token || '',
    vista === 'pendientes' ? { estado: 'pendiente' } : {}
  );
  const { showToast } = useToast();
  const [selectedIncident, setSelectedIncident] = useState<Incidente | null>(null);

  // Filtrar mis casos
  const misCasos = incidentes.filter(
    (inc) => inc.atendidoPor === user?.email
  );

  const handleAsignar = async (id: string) => {
    try {
      await asignarIncidente(id);
      showToast('Incidente asignado exitosamente', 'success');
    } catch (error) {
      showToast('Error al asignar incidente', 'error');
    }
  };

  const handleResolver = async (id: string) => {
    try {
      await resolverIncidente(id);
      showToast('Incidente resuelto exitosamente', 'success');
    } catch (error) {
      showToast('Error al resolver incidente', 'error');
    }
  };

  if (selectedIncident) {
    return (
      <IncidentDetailPage
        incidente={selectedIncident}
        onClose={() => setSelectedIncident(null)}
        obtenerHistorial={obtenerHistorial}
      />
    );
  }

  const tabs = [
    {
      id: 'pendientes',
      label: 'Pendientes',
      content: (
        <>
          {loading ? (
            <Loader />
          ) : error ? (
            <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg">
              <p className="font-semibold">Error al cargar incidentes</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          ) : (
            <IncidentTable
              incidentes={incidentes}
              onSelect={setSelectedIncident}
              renderActions={(incidente) => (
                <Button onClick={() => handleAsignar(incidente.id)}>
                  Asignarme
                </Button>
              )}
            />
          )}
        </>
      ),
    },
    {
      id: 'mis-casos',
      label: 'Mis Casos',
      content: (
        <>
          {loading ? (
            <Loader />
          ) : (
            <IncidentTable
              incidentes={misCasos}
              onSelect={setSelectedIncident}
              renderActions={(incidente) => {
                if (incidente.estado === 'en_atencion') {
                  return (
                    <Button onClick={() => handleResolver(incidente.id)}>
                      Marcar resuelto
                    </Button>
                  );
                }
                return null;
              }}
            />
          )}
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-100 mb-2">
          Panel de Atención de Incidentes
        </h1>
        <p className="text-slate-400">Gestiona incidentes pendientes y tus casos asignados</p>
      </div>

      <Tabs
        tabs={tabs}
        activeTab={vista}
        onTabChange={(tabId) => setVista(tabId as Vista)}
      />
    </div>
  );
}
