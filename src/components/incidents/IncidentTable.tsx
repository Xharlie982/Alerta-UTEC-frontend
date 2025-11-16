import { Incidente } from '../../types/incidentes';
import { IncidentRow } from './IncidentRow';

interface IncidentTableProps {
  incidentes: Incidente[];
  onSelect?: (incidente: Incidente) => void;
  renderActions?: (incidente: Incidente) => React.ReactNode;
}

export function IncidentTable({
  incidentes,
  onSelect,
  renderActions,
}: IncidentTableProps) {
  if (incidentes.length === 0) {
    return (
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow p-8 text-center text-slate-400">
        No hay incidentes para mostrar
      </div>
    );
  }

  return (
    <div>
      {incidentes.map((incidente) => (
        <IncidentRow
          key={incidente.id}
          incidente={incidente}
          onSelect={onSelect}
          actions={renderActions?.(incidente)}
        />
      ))}
    </div>
  );
}
