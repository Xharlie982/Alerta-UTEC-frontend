import { Select } from '../common/Select';
import type { IncidenteFilters, EstadoIncidente, TipoIncidente, Urgencia } from '../../types/incidentes';

interface IncidentFiltersProps {
  filters: IncidenteFilters;
  onChange: (filters: IncidenteFilters) => void;
}

export function IncidentFilters({ filters, onChange }: IncidentFiltersProps) {
  const estadoOptions = [
    { value: '', label: 'Todos los estados' },
    { value: 'pendiente', label: 'Pendiente' },
    { value: 'en_atencion', label: 'En Atención' },
    { value: 'resuelto', label: 'Resuelto' },
  ];

  const tipoOptions = [
    { value: '', label: 'Todos los tipos' },
    { value: 'infraestructura', label: 'Infraestructura' },
    { value: 'limpieza', label: 'Limpieza' },
    { value: 'seguridad', label: 'Seguridad' },
    { value: 'tecnologia', label: 'Tecnología' },
    { value: 'otro', label: 'Otro' },
  ];

  const urgenciaOptions = [
    { value: '', label: 'Todas las urgencias' },
    { value: 'baja', label: 'Baja' },
    { value: 'media', label: 'Media' },
    { value: 'alta', label: 'Alta' },
  ];

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 shadow p-4 mb-6">
      <h3 className="text-lg font-semibold mb-4 text-slate-100">Filtros</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          label="Estado"
          value={filters.estado || ''}
          onChange={(e) =>
            onChange({
              ...filters,
              estado: e.target.value ? (e.target.value as EstadoIncidente) : undefined,
            })
          }
          options={estadoOptions}
        />
        <Select
          label="Tipo"
          value={filters.tipo || ''}
          onChange={(e) =>
            onChange({
              ...filters,
              tipo: e.target.value ? (e.target.value as TipoIncidente) : undefined,
            })
          }
          options={tipoOptions}
        />
        <Select
          label="Urgencia"
          value={filters.urgencia || ''}
          onChange={(e) =>
            onChange({
              ...filters,
              urgencia: e.target.value ? (e.target.value as Urgencia) : undefined,
            })
          }
          options={urgenciaOptions}
        />
      </div>
    </div>
  );
}
