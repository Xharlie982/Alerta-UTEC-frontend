import { Incidente } from '../../types/incidentes';
import { IncidentStatusBadge } from './IncidentStatusBadge';

interface IncidentRowProps {
  incidente: Incidente;
  onSelect?: (incidente: Incidente) => void;
  actions?: React.ReactNode;
}

export function IncidentRow({ incidente, onSelect, actions }: IncidentRowProps) {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString('es-PE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getUrgenciaColor = (urgencia: string) => {
    const colors: Record<string, string> = {
      baja: 'text-slate-400 bg-slate-800 border-slate-700',
      media: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30',
      alta: 'text-orange-400 bg-orange-500/20 border-orange-500/30',
    };
    return colors[urgencia] || 'text-slate-400 bg-slate-800 border-slate-700';
  };

  const getTipoLabel = (tipo: string) => {
    const labels: Record<string, string> = {
      infraestructura: 'Infraestructura',
      limpieza: 'Limpieza',
      seguridad: 'Seguridad',
      tecnologia: 'Tecnología',
      otro: 'Otro',
    };
    return labels[tipo] || tipo;
  };

  return (
    <div
      className={`rounded-xl p-5 mb-4 transition-all ${
        onSelect ? 'cursor-pointer hover:shadow-lg' : ''
      }`}
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
      }}
      onClick={() => onSelect?.(incidente)}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={(e) => {
        if (onSelect && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onSelect(incidente);
        }
      }}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <IncidentStatusBadge estado={incidente.estado} />
            <span className="text-sm font-medium capitalize" style={{ color: '#333333' }}>
              {getTipoLabel(incidente.tipo)}
            </span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getUrgenciaColor(incidente.urgencia)}`}>
              {incidente.urgencia.toUpperCase()}
            </span>
          </div>
          <h3 className="font-semibold mb-2 text-lg" style={{ color: '#333333' }}>{incidente.ubicacion}</h3>
          <p className="text-sm mb-3 line-clamp-2" style={{ color: '#666666' }}>{incidente.descripcion}</p>
          <div className="flex items-center gap-4 text-xs flex-wrap" style={{ color: '#666666' }}>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {formatDate(incidente.creadoEn)}
            </span>
            {incidente.atendidoPor && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Atendido por: {incidente.atendidoPor.split('@')[0]}
              </span>
            )}
          </div>
        </div>
        {actions && (
          <div className="ml-4 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
