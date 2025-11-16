import type { Incidente, HistorialItem } from '../types/incidentes';

// NOTE: Estos son datos mock para desarrollo. En producción, estos vendrán del backend.
// Para modificar los datos iniciales, edita este archivo.

// Función helper para generar timestamps relativos
const now = Math.floor(Date.now() / 1000);

// Incidentes mock iniciales
export const mockIncidentesIniciales: Incidente[] = [
  {
    id: '1',
    estado: 'pendiente',
    reportadoPor: 'estudiante@utec.edu.pe',
    creadoEn: now - 3600, // Hace 1 hora
    actualizadoEn: now - 3600,
    tipo: 'infraestructura',
    ubicacion: 'Pabellón A, Piso 3, Baño Hombres',
    descripcion: 'El lavadero está atorado y el agua no fluye correctamente. Se necesita atención urgente.',
    urgencia: 'media',
    atendidoPor: null,
  },
  {
    id: '2',
    estado: 'en_atencion',
    reportadoPor: 'estudiante2@utec.edu.pe',
    creadoEn: Math.floor(Date.now() / 1000) - 7200,
    actualizadoEn: Math.floor(Date.now() / 1000) - 1800,
    tipo: 'limpieza',
    ubicacion: 'Pabellón B, Piso 2, Aula 201',
    descripcion: 'Hay basura acumulada en el aula y necesita limpieza urgente.',
    urgencia: 'alta',
    atendidoPor: 'trabajador@utec.edu.pe',
  },
  {
    id: '3',
    estado: 'resuelto',
    reportadoPor: 'estudiante3@utec.edu.pe',
    creadoEn: Math.floor(Date.now() / 1000) - 86400,
    actualizadoEn: Math.floor(Date.now() / 1000) - 43200,
    tipo: 'tecnologia',
    ubicacion: 'Pabellón C, Laboratorio de Computación',
    descripcion: 'El proyector no funcionaba, pero ya fue reparado.',
    urgencia: 'baja',
    atendidoPor: 'trabajador@utec.edu.pe',
  },
  {
    id: '4',
    estado: 'pendiente',
    reportadoPor: 'estudiante@utec.edu.pe',
    creadoEn: Math.floor(Date.now() / 1000) - 1800,
    actualizadoEn: Math.floor(Date.now() / 1000) - 1800,
    tipo: 'seguridad',
    ubicacion: 'Pabellón D, Entrada Principal',
    descripcion: 'La puerta principal no cierra correctamente.',
    urgencia: 'alta',
    atendidoPor: null,
  },
  {
    id: '5',
    estado: 'en_atencion',
    reportadoPor: 'estudiante4@utec.edu.pe',
    creadoEn: Math.floor(Date.now() / 1000) - 5400,
    actualizadoEn: Math.floor(Date.now() / 1000) - 900,
    tipo: 'infraestructura',
    ubicacion: 'Pabellón E, Piso 1, Cafetería',
    descripcion: 'Fuga de agua en el área de la cafetería.',
    urgencia: 'alta',
    atendidoPor: 'trabajador@utec.edu.pe',
  },
  {
    id: '6',
    estado: 'resuelto',
    reportadoPor: 'estudiante@utec.edu.pe',
    creadoEn: Math.floor(Date.now() / 1000) - 172800,
    actualizadoEn: Math.floor(Date.now() / 1000) - 129600,
    tipo: 'limpieza',
    ubicacion: 'Pabellón A, Piso 1, Pasillo Principal',
    descripcion: 'Limpieza de vidrios completada exitosamente.',
    urgencia: 'baja',
    atendidoPor: 'trabajador@utec.edu.pe',
  },
];

// Historial mock
export const mockHistorialInicial: Record<string, HistorialItem[]> = {
  '1': [
    {
      timestamp: Math.floor(Date.now() / 1000) - 3600,
      accion: 'CREADO',
      realizadoPor: 'estudiante@utec.edu.pe',
      detalles: 'Incidente creado con estado pendiente',
    },
  ],
  '2': [
    {
      timestamp: Math.floor(Date.now() / 1000) - 7200,
      accion: 'CREADO',
      realizadoPor: 'estudiante2@utec.edu.pe',
      detalles: 'Incidente creado con estado pendiente',
    },
    {
      timestamp: Math.floor(Date.now() / 1000) - 1800,
      accion: 'ASIGNADO',
      realizadoPor: 'trabajador@utec.edu.pe',
      detalles: 'Incidente asignado a trabajador@utec.edu.pe',
    },
  ],
  '3': [
    {
      timestamp: Math.floor(Date.now() / 1000) - 86400,
      accion: 'CREADO',
      realizadoPor: 'estudiante3@utec.edu.pe',
      detalles: 'Incidente creado con estado pendiente',
    },
    {
      timestamp: Math.floor(Date.now() / 1000) - 64800,
      accion: 'ASIGNADO',
      realizadoPor: 'trabajador@utec.edu.pe',
      detalles: 'Incidente asignado a trabajador@utec.edu.pe',
    },
    {
      timestamp: Math.floor(Date.now() / 1000) - 43200,
      accion: 'RESUELTO',
      realizadoPor: 'trabajador@utec.edu.pe',
      detalles: 'Incidente resuelto exitosamente',
    },
  ],
  '4': [
    {
      timestamp: Math.floor(Date.now() / 1000) - 1800,
      accion: 'CREADO',
      realizadoPor: 'estudiante@utec.edu.pe',
      detalles: 'Incidente creado con estado pendiente',
    },
  ],
  '5': [
    {
      timestamp: Math.floor(Date.now() / 1000) - 5400,
      accion: 'CREADO',
      realizadoPor: 'estudiante4@utec.edu.pe',
      detalles: 'Incidente creado con estado pendiente',
    },
    {
      timestamp: Math.floor(Date.now() / 1000) - 900,
      accion: 'ASIGNADO',
      realizadoPor: 'trabajador@utec.edu.pe',
      detalles: 'Incidente asignado a trabajador@utec.edu.pe',
    },
  ],
  '6': [
    {
      timestamp: Math.floor(Date.now() / 1000) - 172800,
      accion: 'CREADO',
      realizadoPor: 'estudiante@utec.edu.pe',
      detalles: 'Incidente creado con estado pendiente',
    },
    {
      timestamp: Math.floor(Date.now() / 1000) - 155000,
      accion: 'ASIGNADO',
      realizadoPor: 'trabajador@utec.edu.pe',
      detalles: 'Incidente asignado a trabajador@utec.edu.pe',
    },
    {
      timestamp: Math.floor(Date.now() / 1000) - 129600,
      accion: 'RESUELTO',
      realizadoPor: 'trabajador@utec.edu.pe',
      detalles: 'Incidente resuelto exitosamente',
    },
  ],
};

