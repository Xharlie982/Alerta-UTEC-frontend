import { useState, useEffect, useCallback, useRef } from 'react';
import type { Incidente, IncidenteFilters, HistorialItem } from '../types/incidentes';
import { mockIncidentesIniciales, mockHistorialInicial } from '../mocks/incidentes';

// Estado global en memoria (simula base de datos)
let incidentesEnMemoria: Incidente[] = [...mockIncidentesIniciales];
let historialEnMemoria: Record<string, HistorialItem[]> = { ...mockHistorialInicial };

// Función para simular delay de red
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function useIncidentes(token: string | null, filters: IncidenteFilters = {}) {
  const [incidentes, setIncidentes] = useState<Incidente[]>([]);
  const [loading, setLoading] = useState(true); // Iniciar en true para la primera carga
  const [error, setError] = useState<string | null>(null);
  const hasLoadedRef = useRef(false);
  const lastTokenRef = useRef<string | null>(null);

  // Cargar incidentes solo una vez al montar o cuando cambia el token
  useEffect(() => {
    if (!token) {
      setLoading(false);
      setIncidentes([]);
      hasLoadedRef.current = false;
      lastTokenRef.current = null;
      return;
    }

    // Si el token no cambió y ya se cargó, no hacer nada
    if (hasLoadedRef.current && lastTokenRef.current === token) {
      return;
    }

    // Resetear si cambió el token
    if (lastTokenRef.current !== token) {
      hasLoadedRef.current = false;
      lastTokenRef.current = token;
    }

    // Solo cargar si no se ha cargado antes
    if (hasLoadedRef.current) return;

    setLoading(true);
    setError(null);
    
    const loadData = async () => {
      try {
        await delay(300); // Simular delay de red
        
        let filtered = [...incidentesEnMemoria];
        
        if (filters.estado) {
          filtered = filtered.filter(inc => inc.estado === filters.estado);
        }
        if (filters.tipo) {
          filtered = filtered.filter(inc => inc.tipo === filters.tipo);
        }
        if (filters.urgencia) {
          filtered = filtered.filter(inc => inc.urgencia === filters.urgencia);
        }
        
        setIncidentes(filtered);
        hasLoadedRef.current = true;
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar incidentes');
        hasLoadedRef.current = true;
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [token]); // Solo cargar cuando cambia el token

  const cargarIncidentes = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    
    try {
      await delay(300);
      let filtered = [...incidentesEnMemoria];
      
      if (filters.estado) {
        filtered = filtered.filter(inc => inc.estado === filters.estado);
      }
      if (filters.tipo) {
        filtered = filtered.filter(inc => inc.tipo === filters.tipo);
      }
      if (filters.urgencia) {
        filtered = filtered.filter(inc => inc.urgencia === filters.urgencia);
      }
      
      setIncidentes(filtered);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar incidentes');
    } finally {
      setLoading(false);
    }
  }, [token, filters.estado, filters.tipo, filters.urgencia]);

  const crearIncidente = async (data: {
    tipo: string;
    ubicacion: string;
    descripcion: string;
    urgencia: string;
  }) => {
    if (!token) throw new Error('No hay token de autenticación');

    try {
      await delay(400);
      
      const userStr = localStorage.getItem('alerta_utec_user');
      const user = userStr ? JSON.parse(userStr) : null;
      
      const nuevo: Incidente = {
        id: `mock_${Date.now()}`,
        estado: 'pendiente',
        reportadoPor: user?.email || 'estudiante@utec.edu.pe',
        creadoEn: Math.floor(Date.now() / 1000),
        actualizadoEn: Math.floor(Date.now() / 1000),
        tipo: data.tipo as any,
        ubicacion: data.ubicacion,
        descripcion: data.descripcion,
        urgencia: data.urgencia as any,
        atendidoPor: null,
      };
      
      incidentesEnMemoria.unshift(nuevo);
      
      // Agregar al historial
      historialEnMemoria[nuevo.id] = [{
        timestamp: nuevo.creadoEn,
        accion: 'CREADO',
        realizadoPor: nuevo.reportadoPor,
        detalles: 'Incidente creado con estado pendiente',
      }];
      
      setIncidentes((prev) => [nuevo, ...prev]);
      return nuevo;
    } catch (err) {
      throw err;
    }
  };

  const asignarIncidente = async (id: string) => {
    if (!token) throw new Error('No hay token de autenticación');

    try {
      await delay(300);
      
      const userStr = localStorage.getItem('alerta_utec_user');
      const user = userStr ? JSON.parse(userStr) : null;
      
      const incidente = incidentesEnMemoria.find(inc => inc.id === id);
      if (!incidente) throw new Error('Incidente no encontrado');
      
      incidente.estado = 'en_atencion';
      incidente.atendidoPor = user?.email || 'trabajador@utec.edu.pe';
      incidente.actualizadoEn = Math.floor(Date.now() / 1000);
      
      // Agregar al historial
      if (!historialEnMemoria[id]) historialEnMemoria[id] = [];
      historialEnMemoria[id].push({
        timestamp: incidente.actualizadoEn,
        accion: 'ASIGNADO',
        realizadoPor: incidente.atendidoPor,
        detalles: `Incidente asignado a ${incidente.atendidoPor}`,
      });
      
      setIncidentes((prev) =>
        prev.map((inc) => (inc.id === id ? { ...incidente } : inc))
      );
      return { ...incidente };
    } catch (err) {
      throw err;
    }
  };

  const resolverIncidente = async (id: string) => {
    if (!token) throw new Error('No hay token de autenticación');

    try {
      await delay(300);
      
      const userStr = localStorage.getItem('alerta_utec_user');
      const user = userStr ? JSON.parse(userStr) : null;
      
      const incidente = incidentesEnMemoria.find(inc => inc.id === id);
      if (!incidente) throw new Error('Incidente no encontrado');
      
      incidente.estado = 'resuelto';
      incidente.actualizadoEn = Math.floor(Date.now() / 1000);
      
      // Agregar al historial
      if (!historialEnMemoria[id]) historialEnMemoria[id] = [];
      historialEnMemoria[id].push({
        timestamp: incidente.actualizadoEn,
        accion: 'RESUELTO',
        realizadoPor: user?.email || incidente.atendidoPor || 'trabajador@utec.edu.pe',
        detalles: 'Incidente resuelto exitosamente',
      });
      
      setIncidentes((prev) =>
        prev.map((inc) => (inc.id === id ? { ...incidente } : inc))
      );
      return { ...incidente };
    } catch (err) {
      throw err;
    }
  };

  const obtenerHistorial = async (id: string): Promise<HistorialItem[]> => {
    await delay(200);
    return historialEnMemoria[id] || [];
  };

  const agregarComentario = async (id: string, comentario: string): Promise<void> => {
    if (!token) throw new Error('No hay token de autenticación');

    await delay(300);

    const userStr = localStorage.getItem('alerta_utec_user');
    const user = userStr ? JSON.parse(userStr) : null;

    if (!historialEnMemoria[id]) historialEnMemoria[id] = [];
    historialEnMemoria[id].push({
      timestamp: Math.floor(Date.now() / 1000),
      accion: 'COMENTARIO',
      realizadoPor: user?.email || 'usuario@utec.edu.pe',
      detalles: comentario,
    });

    // Actualizar el incidente
    const incidente = incidentesEnMemoria.find(inc => inc.id === id);
    if (incidente) {
      incidente.actualizadoEn = Math.floor(Date.now() / 1000);
      setIncidentes((prev) =>
        prev.map((inc) => (inc.id === id ? { ...incidente } : inc))
      );
    }

    // Recargar historial si está abierto
    return Promise.resolve();
  };

  const actualizarIncidente = (incidenteActualizado: Incidente) => {
    const index = incidentesEnMemoria.findIndex(inc => inc.id === incidenteActualizado.id);
    if (index !== -1) {
      incidentesEnMemoria[index] = incidenteActualizado;
      setIncidentes((prev) =>
        prev.map((inc) => (inc.id === incidenteActualizado.id ? incidenteActualizado : inc))
      );
    }
  };

  return {
    incidentes,
    loading,
    error,
    cargarIncidentes,
    crearIncidente,
    asignarIncidente,
    resolverIncidente,
    obtenerHistorial,
    agregarComentario,
    actualizarIncidente,
  };
}
