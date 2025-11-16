import { useState } from 'react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { Select } from '../common/Select';
import type { TipoIncidente, Urgencia } from '../../types/incidentes';

interface IncidentFormProps {
  onSubmit: (data: {
    tipo: string;
    ubicacion: string;
    descripcion: string;
    urgencia: string;
  }) => Promise<void>;
  onCancel?: () => void;
}

export function IncidentForm({ onSubmit, onCancel }: IncidentFormProps) {
  const [tipo, setTipo] = useState<TipoIncidente>('infraestructura');
  const [ubicacion, setUbicacion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [urgencia, setUrgencia] = useState<Urgencia>('media');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await onSubmit({ tipo, ubicacion, descripcion, urgencia });
      // Reset form
      setTipo('infraestructura');
      setUbicacion('');
      setDescripcion('');
      setUrgencia('media');
      onCancel?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear el incidente');
    } finally {
      setLoading(false);
    }
  };

  const tipoOptions: { value: TipoIncidente; label: string }[] = [
    { value: 'infraestructura', label: 'Infraestructura' },
    { value: 'limpieza', label: 'Limpieza' },
    { value: 'seguridad', label: 'Seguridad' },
    { value: 'tecnologia', label: 'Tecnología' },
    { value: 'otro', label: 'Otro' },
  ];

  const urgenciaOptions: { value: Urgencia; label: string }[] = [
    { value: 'baja', label: 'Baja' },
    { value: 'media', label: 'Media' },
    { value: 'alta', label: 'Alta' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select
        label="Tipo de incidente"
        value={tipo}
        onChange={(e) => setTipo(e.target.value as TipoIncidente)}
        options={tipoOptions}
      />
      <Input
        label="Ubicación"
        value={ubicacion}
        onChange={(e) => setUbicacion(e.target.value)}
        required
        placeholder="Ej: Pabellón A, Piso 3, Baño Hombres"
      />
      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: '#333333' }}>
          Descripción
        </label>
        <textarea
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
          style={{
            borderColor: '#d1d5db',
            backgroundColor: '#ffffff',
            color: '#333333',
          }}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          rows={4}
          placeholder="Describe el incidente..."
        />
      </div>
      <Select
        label="Urgencia"
        value={urgencia}
        onChange={(e) => setUrgencia(e.target.value as Urgencia)}
        options={urgenciaOptions}
      />
      {error && <p className="text-sm" style={{ color: '#dc2626' }}>{error}</p>}
      <div className="flex gap-2">
        <Button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Reportar incidente'}
        </Button>
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
        )}
      </div>
    </form>
  );
}
