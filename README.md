# AlertaUTEC Frontend - Dashboard Estudiante

Frontend completo del sistema de gestión de incidentes para UTEC, construido con tecnologías modernas y **simulación completa** de backend y WebSocket para desarrollo y demos.

## 🚀 Stack Tecnológico

- **Bundler**: Vite
- **Framework**: React 18
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Router**: React Router DOM
- **Estado**: Context API + Custom Hooks
- **Datos**: Mock en memoria (simulación completa sin backend)

## ✨ Características Implementadas

### Dashboard Estudiante
- ✅ **Summary Cards**: Contadores de incidentes por estado (Pendientes, En atención, Resueltos)
- ✅ **Lista de Incidentes**: Cards responsive (mobile) y tabla (desktop), ordenados por más recientes
- ✅ **Crear Incidente**: Modal con formulario completo (tipo, ubicación, descripción, urgencia)
- ✅ **Optimistic UI**: Los incidentes se agregan inmediatamente a la lista
- ✅ **Panel Lateral de Detalle**: Se abre al hacer clic en un incidente
- ✅ **Historial/Timeline**: Visualización completa del historial con línea de tiempo
- ✅ **Agregar Comentarios**: Los usuarios pueden agregar comentarios al historial
- ✅ **WebSocket Simulado**: Actualizaciones en tiempo real cada 8-15 segundos
- ✅ **Indicador de Conexión**: Muestra estado de conexión WS y última sincronización
- ✅ **Toasts/Notificaciones**: Feedback visual para todas las acciones
- ✅ **Estados de UI**: Loading, empty state, error state

### Autenticación
- ✅ Login con formulario + botones de acceso rápido
- ✅ Registro de nuevos usuarios (guardado en localStorage)
- ✅ Verificación de cuentas al iniciar sesión
- ✅ Persistencia de sesión en localStorage

## 📦 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ y npm

### Pasos

1. **Instalar dependencias:**
```bash
npm install
```

2. **Crear archivo `.env` (opcional):**
```bash
cp .env.example .env
```

**Nota**: El proyecto funciona completamente sin variables de entorno. Las variables solo se usan cuando hay backend real.

3. **Ejecutar servidor de desarrollo:**
```bash
npm run dev
```

4. **Abrir en el navegador:**
```
http://localhost:5173
```

## 🎮 Cómo Probar la Demo

### 1. Login y Registro
- **Opción A - Registrarse**: Ve a `/register`, completa el formulario y regístrate
- **Opción B - Login rápido**: En `/login`, usa el botón "Entrar como Estudiante" (login mock)
- **Opción C - Login con cuenta registrada**: Si ya te registraste, usa tu email y contraseña

### 2. Dashboard del Estudiante
Una vez autenticado, verás:
- **Summary Cards** en la parte superior con estadísticas
- **Lista de incidentes** reportados por ti
- **Botón "+ Nuevo incidente"** para crear reportes

### 3. Crear un Incidente
1. Haz clic en "+ Nuevo incidente"
2. Completa el formulario:
   - Tipo: Infraestructura, Limpieza, Seguridad, Tecnología, Otro
   - Ubicación: Ej. "Pabellón A, Piso 3, Aula 301"
   - Descripción: Describe el problema
   - Urgencia: Baja, Media, Alta
3. Haz clic en "Reportar incidente"
4. **Observa**: El incidente aparece inmediatamente (optimistic UI)
5. Después de ~800ms, verás un toast de confirmación

### 4. Ver Detalle de Incidente
1. Haz clic en cualquier incidente de la lista
2. Se abre un **panel lateral** con:
   - Información completa del incidente
   - Formulario para agregar comentarios
   - Timeline/historial visual

### 5. Agregar Comentario
1. Con el panel de detalle abierto
2. Escribe un comentario en el textarea
3. Haz clic en "Agregar comentario"
4. **Observa**: El comentario aparece inmediatamente en el timeline

### 6. WebSocket Simulado (Actualizaciones en Tiempo Real)
1. Deja el dashboard abierto
2. **Espera 8-15 segundos**
3. **Observa**: 
   - Un toast aparece indicando que un incidente fue actualizado
   - El estado del incidente cambia automáticamente (pendiente → en_atencion → resuelto)
   - El indicador de conexión muestra "En tiempo real" con un punto verde pulsante
   - La última sincronización se actualiza

### 7. Estados de la UI
- **Loading**: Aparece al cargar incidentes inicialmente
- **Empty State**: Si no tienes incidentes, verás un mensaje amigable
- **Error State**: Si hay un error, se muestra un mensaje claro

## 📁 Estructura del Proyecto

```
src/
├── assets/              # Imágenes y recursos estáticos
├── components/
│   ├── common/         # Componentes reutilizables (Button, Input, Toast, etc.)
│   ├── incidents/      # Componentes específicos de incidentes
│   └── layout/         # Layout y navegación
├── config/             # Configuración (constantes, env)
├── context/            # Context API (Auth, WebSocket)
├── hooks/              # Custom hooks (useAuth, useIncidentes, etc.)
├── mocks/              # Datos mock (usuarios, incidentes)
├── pages/              # Páginas principales
├── services/           # Servicios mock (API, WebSocket)
├── types/              # TypeScript types
└── utils/              # Utilidades (userStorage, etc.)
```

## 🔧 Modificar Datos Mock

### Cambiar Incidentes Iniciales
Edita `src/mocks/incidentes.ts`:
- Modifica `mockIncidentesIniciales` para agregar/cambiar incidentes
- Modifica `mockHistorialInicial` para cambiar el historial

### Cambiar Usuarios Mock
Edita `src/mocks/usuarios.ts`:
- Modifica `mockUsuarios` para agregar/cambiar usuarios de prueba

### Ajustar WebSocket
Edita `src/services/wsMock.ts`:
- Cambia el intervalo de actualizaciones (línea ~30)
- Modifica la lógica de emisión de eventos

## 🧪 Pruebas Manuales Sugeridas

### Flujo Completo de Usuario
1. ✅ **Registrarse**: Ve a `/register`, completa el formulario, verifica redirección a `/login`
2. ✅ **Iniciar Sesión**: Usa las credenciales registradas, verifica acceso al dashboard
3. ✅ **Crear Incidente**: Crea un nuevo incidente, verifica que aparece inmediatamente
4. ✅ **Abrir Panel**: Haz clic en el incidente creado, verifica que el panel se abre
5. ✅ **Agregar Comentario**: Agrega un comentario, verifica que aparece en el timeline
6. ✅ **Esperar WebSocket**: Espera 8-15 segundos, verifica que llega una actualización
7. ✅ **Ver Actualización**: Verifica que el estado del incidente cambia automáticamente
8. ✅ **Cerrar Panel**: Cierra el panel, verifica que vuelves a la lista

### Casos Especiales
- ✅ **Empty State**: Crea una cuenta nueva, verifica el mensaje cuando no hay incidentes
- ✅ **Error Handling**: Simula un error (puedes forzar desconexión WS en el código)
- ✅ **Responsive**: Prueba en mobile y desktop, verifica que todo se adapta

## 🔌 Integración con Backend Real

Cuando el backend esté listo:

1. **Configurar variables de entorno:**
```env
VITE_API_URL=https://tu-api.com
VITE_WS_URL=wss://tu-api.com/ws
```

2. **Reemplazar servicios mock:**
- `src/services/incidentesApi.ts` - Ya está preparado para llamadas reales
- `src/services/wsMock.ts` - Reemplazar con WebSocket real
- `src/hooks/useIncidentes.ts` - Cambiar de datos mock a llamadas API

3. **Actualizar AuthContext:**
- `src/context/AuthContext.tsx` - Usar `login()` real en lugar de `loginAs()`

## 📝 Notas Técnicas

- **Optimistic UI**: Los incidentes se agregan inmediatamente a la lista antes de confirmación del servidor
- **WebSocket Mock**: Usa `setInterval` para simular eventos periódicos
- **Persistencia**: Los usuarios registrados se guardan en `localStorage`
- **Estado Global**: Los incidentes se mantienen en memoria durante la sesión
- **TypeScript**: Todo el código está tipado para mejor DX

## 🐛 Troubleshooting

**Problema**: Los incidentes no se actualizan automáticamente
- **Solución**: Verifica que el WebSocket esté conectado (indicador verde en el header)

**Problema**: No puedo iniciar sesión con cuenta registrada
- **Solución**: Verifica que el email y contraseña coincidan exactamente (case-sensitive)

**Problema**: El panel lateral no se cierra
- **Solución**: Haz clic fuera del panel o en el botón X

## 📄 Licencia

Este proyecto es parte de AlertaUTEC para UTEC.

---

**Desarrollado para hackathon** - MVP funcional con simulación completa de backend
