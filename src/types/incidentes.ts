export type TipoIncidente = 'infraestructura' | 'limpieza' | 'seguridad' | 'tecnologia' | 'otro';
export type Urgencia = 'baja' | 'media' | 'alta';
export type EstadoIncidente = 'pendiente' | 'en_atencion' | 'resuelto';

export interface Incidente {
  id: string;
  estado: EstadoIncidente;
  reportadoPor: string;
  creadoEn: number;
  actualizadoEn: number;
  tipo: TipoIncidente;
  ubicacion: string;
  descripcion: string;
  urgencia: Urgencia;
  atendidoPor: string | null;
}

export interface HistorialItem {
  timestamp: number;
  accion: string;
  realizadoPor: string;
  detalles: string;
}

export interface IncidenteFilters {
  estado?: EstadoIncidente;
  tipo?: TipoIncidente;
  urgencia?: Urgencia;
}

export interface WebSocketMessage {
  tipo: 'nuevo_incidente' | 'actualizacion_incidente';
  incidenteId: string;
  datos?: {
    estado?: EstadoIncidente;
    actualizadoEn?: number;
    atendidoPor?: string | null;
  };
  timestamp: number;
}

export interface ChatMessage {
  id: string;
  incidenteId: string;
  enviadoPor: string;
  mensaje: string;
  timestamp: number;
  leido: boolean;
}

