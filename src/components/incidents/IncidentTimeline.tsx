import { HistorialItem } from '../../types/incidentes';

interface IncidentTimelineProps {
  historial: HistorialItem[];
}

export function IncidentTimeline({ historial }: IncidentTimelineProps) {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString('es-PE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (historial.length === 0) {
    return (
      <div className="text-center py-8" style={{ color: '#666666' }}>
        No hay historial disponible
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {historial.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#4a5a40' }}></div>
            {index < historial.length - 1 && (
              <div className="w-0.5 h-full mt-2" style={{ backgroundColor: '#d1d5db' }}></div>
            )}
          </div>
          <div className="flex-1 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold" style={{ color: '#333333' }}>{item.accion}</span>
              <span className="text-xs" style={{ color: '#666666' }}>
                {formatDate(item.timestamp)}
              </span>
            </div>
            <p className="text-sm mb-1" style={{ color: '#333333' }}>{item.detalles}</p>
            <p className="text-xs" style={{ color: '#666666' }}>Por: {item.realizadoPor}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
