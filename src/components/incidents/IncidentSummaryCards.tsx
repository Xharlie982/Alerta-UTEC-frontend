import type { Incidente } from '../../types/incidentes';

interface IncidentSummaryCardsProps {
  incidentes: Incidente[];
}

export function IncidentSummaryCards({ incidentes }: IncidentSummaryCardsProps) {
  const pendientes = incidentes.filter(inc => inc.estado === 'pendiente').length;
  const enAtencion = incidentes.filter(inc => inc.estado === 'en_atencion').length;
  const resueltos = incidentes.filter(inc => inc.estado === 'resuelto').length;

  const total = incidentes.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="rounded-xl p-5 transition-colors" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)' }}>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm" style={{ color: '#666666' }}>Pendientes</p>
            <p className="text-3xl font-bold" style={{ color: '#4a5a40' }}>{pendientes}</p>
            {total > 0 && (
              <p className="text-xs mt-1" style={{ color: '#666666' }}>
                {Math.round((pendientes / total) * 100)}% del total
              </p>
            )}
          </div>
          <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#4a5a40' }}>
            <svg className="w-6 h-6" style={{ color: '#ffffff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="rounded-xl p-5 transition-colors" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)' }}>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm" style={{ color: '#666666' }}>En Atención</p>
            <p className="text-3xl font-bold" style={{ color: '#7d9670' }}>{enAtencion}</p>
            {total > 0 && (
              <p className="text-xs mt-1" style={{ color: '#666666' }}>
                {Math.round((enAtencion / total) * 100)}% del total
              </p>
            )}
          </div>
          <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#7d9670' }}>
            <svg className="w-6 h-6" style={{ color: '#ffffff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="rounded-xl p-5 transition-colors" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)' }}>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm" style={{ color: '#666666' }}>Resueltos</p>
            <p className="text-3xl font-bold" style={{ color: '#adcc9c' }}>{resueltos}</p>
            {total > 0 && (
              <p className="text-xs mt-1" style={{ color: '#666666' }}>
                {Math.round((resueltos / total) * 100)}% del total
              </p>
            )}
          </div>
          <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#adcc9c' }}>
            <svg className="w-6 h-6" style={{ color: '#ffffff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

