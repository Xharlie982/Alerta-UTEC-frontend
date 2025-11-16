import type { EstadoIncidente } from '../../types/incidentes';

interface IncidentStatusBadgeProps {
  estado: EstadoIncidente;
}

export function IncidentStatusBadge({ estado }: IncidentStatusBadgeProps) {
  const badgeStyles: Record<EstadoIncidente, { bg: string; text: string; border: string }> = {
    pendiente: { bg: '#4a5a40', text: '#ffffff', border: '#4a5a40' },
    en_atencion: { bg: '#7d9670', text: '#ffffff', border: '#7d9670' },
    resuelto: { bg: '#adcc9c', text: '#ffffff', border: '#adcc9c' },
  };

  const labels: Record<EstadoIncidente, string> = {
    pendiente: 'Pendiente',
    en_atencion: 'En Atención',
    resuelto: 'Resuelto',
  };

  const style = badgeStyles[estado];

  return (
    <span
      className="px-2 py-1 rounded-full text-xs font-medium border"
      style={{ backgroundColor: style.bg, color: style.text, borderColor: style.border }}
    >
      {labels[estado]}
    </span>
  );
}
