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

## 📖 Guía de Uso Completa

### 1. Registro de Usuario

1. Navega a la página de inicio (`/`)
2. Haz clic en "Registrarse" o ve directamente a `/register`
3. Completa el formulario con:
   - **Nombre**: Tu nombre de pila
   - **Apellido**: Tu apellido
   - **Correo institucional**: Debe terminar en `@utec.edu.pe`
   - **Código de estudiante**: Tu código único de estudiante
   - **Contraseña**: Mínimo 6 caracteres
   - **Confirmar contraseña**: Debe coincidir con la contraseña
4. Haz clic en "Registrarse"
5. Serás redirigido automáticamente a la página de login

**Nota**: Los datos se guardan en `localStorage` del navegador. Si limpias el almacenamiento, deberás registrarte nuevamente.

### 2. Inicio de Sesión

1. Ve a la página de login (`/login`)
2. Ingresa tu correo institucional y contraseña
3. Haz clic en "Iniciar sesión"
4. También puedes usar "Iniciar sesión con Google" (funcionalidad pendiente de implementar)
5. Si la cuenta no está registrada, verás un mensaje de error con un enlace para registrarte
6. Serás redirigido automáticamente al dashboard de inicio (`/inicio`)

### 3. Dashboard de Inicio

Al iniciar sesión, verás el dashboard principal con:

- **Banner de bienvenida**: 
  - Saludo personalizado "Hola, [Tu Nombre]"
  - Imagen del comegalletas sobrepuesta a la derecha
  
- **Tarjetas de estadísticas** (3 tarjetas):
  - **Reportados hoy**: Número de incidentes creados hoy
  - **Pendientes**: Total de incidentes en estado pendiente
  - **Completados**: Total de incidentes resueltos
  
- **Secciones informativas**:
  - **Mis Incidentes**: Acceso rápido con descripción
  - **Historial**: Acceso al historial de incidentes resueltos

### 4. Gestión de Incidentes

#### Ver Mis Incidentes

1. Haz clic en "Mis Incidentes" en el sidebar (ícono de hojas) o en la página de inicio
2. Verás:
   - **Tarjetas de resumen** en la parte superior:
     - Pendientes
     - En Atención
     - Resueltos
     - Total
   - **Lista de incidentes** ordenados por más recientes primero
   - **Indicador de conexión WebSocket** mostrando estado en tiempo real
   - **Botón "+ Nuevo incidente"** para crear reportes

#### Crear un Nuevo Incidente

1. En la página "Mis Incidentes", haz clic en el botón "+ Nuevo incidente"
2. Se mostrará un formulario. Completa:
   - **Tipo**: Selecciona entre:
     - Infraestructura
     - Limpieza
     - Seguridad
     - Tecnología
     - Otro
   - **Ubicación**: Describe dónde ocurre el incidente (ej: "Pabellón A, Piso 3, Aula 301")
   - **Descripción**: Explica detalladamente el problema
   - **Urgencia**: Selecciona el nivel:
     - Baja
     - Media
     - Alta
3. Haz clic en "Reportar incidente"
4. **Observa**: 
   - El incidente aparece inmediatamente en la lista (actualización optimista)
   - Después de ~800ms, verás un toast de confirmación del servidor
   - El formulario se oculta automáticamente

#### Ver Detalles de un Incidente

1. Haz clic en cualquier incidente de la lista
2. Se abrirá un **panel lateral** desde la derecha con:
   - **Información completa** del incidente:
     - Estado actual
     - Tipo y urgencia
     - Ubicación y descripción
     - Fecha de creación y última actualización
     - Trabajador asignado (si aplica)
   - **Timeline/Historial**: 
     - Línea de tiempo visual con todas las acciones
     - Muestra quién hizo qué y cuándo
   - **Formulario de comentarios**: 
     - Agrega comentarios adicionales al incidente
   - **Chat**: 
     - Si hay un trabajador asignado, podrás chatear con él
     - Los mensajes se actualizan automáticamente cada 3 segundos

#### Agregar Comentarios

1. Abre el panel de detalles de un incidente
2. En la sección "Comentarios", escribe tu comentario en el textarea
3. Haz clic en "Agregar comentario"
4. **Observa**: 
   - El comentario aparece inmediatamente en el timeline
   - Se muestra quién lo agregó y cuándo
   - Recibirás un toast de confirmación

#### Cerrar el Panel de Detalles

- Haz clic en el botón "X" en la esquina superior derecha del panel
- O haz clic fuera del panel (en el overlay oscuro)

### 5. Chat con Trabajador

1. Cuando un incidente tiene un trabajador asignado, verás la sección "Mensajería" debajo de las tarjetas de resumen
2. Haz clic en el encabezado del chat para expandir/colapsar
3. **Enviar mensaje**:
   - Escribe tu mensaje en el campo de texto
   - Presiona Enter o haz clic en el botón de enviar
   - El mensaje aparece inmediatamente en el chat
4. **Recibir respuestas**:
   - El trabajador responderá automáticamente después de 2-4 segundos (simulado)
   - Los mensajes se actualizan automáticamente cada 3 segundos
   - Las respuestas aparecen en el lado izquierdo, tus mensajes en el derecho
5. **Nota**: El chat solo está disponible cuando hay un trabajador asignado al incidente

### 6. Historial de Incidentes

1. Haz clic en "Historial" en el sidebar (ícono de reloj) o en la página de inicio
2. Verás todos los incidentes resueltos anteriormente
3. **Filtros disponibles**:
   - **Todos**: Muestra todos los incidentes
   - **Pendientes**: Solo incidentes pendientes
   - **En Atención**: Solo incidentes en atención
   - **Resueltos**: Solo incidentes resueltos
4. Cada incidente muestra:
   - Estado final con badge de color
   - Tipo y urgencia
   - Ubicación y descripción
   - Fecha de creación y resolución
   - Trabajador que lo atendió (si aplica)
5. Los incidentes están ordenados por más recientes primero

### 7. Editar Perfil

1. Haz clic en tu nombre o avatar en el navbar (esquina superior derecha)
2. Serás redirigido a la página de edición de perfil (`/perfil`)
3. Puedes actualizar:
   - **Nombre**: Tu nombre de pila
   - **Apellido**: Tu apellido
   - **Correo electrónico**: Debe ser un correo institucional de UTEC
   - **Código de estudiante**: Tu código único
4. Haz clic en "Guardar Cambios"
5. **Observa**:
   - Un mensaje de éxito aparece
   - Después de 1.5 segundos, serás redirigido automáticamente al dashboard de inicio
   - Tu sesión se mantendrá activa (no se cerrará)
   - Los cambios se reflejan inmediatamente en el navbar
6. **Cancelar**: Haz clic en "Cancelar" para volver al inicio sin guardar cambios

**Nota**: Si cambias el correo electrónico, deberás iniciar sesión nuevamente con el nuevo correo.

### 8. Navegación

#### Sidebar (Menú Lateral)

- **Toggle Sidebar**: Botón en el navbar (esquina superior izquierda) para mostrar/ocultar el sidebar
- **Enlaces disponibles**:
  - 🏠 **Inicio**: Dashboard principal con estadísticas
  - 📋 **Mis Incidentes**: Gestión completa de incidentes
  - 🕐 **Historial**: Incidentes resueltos anteriormente
- **Cookie Monster**: Aparece en la esquina inferior izquierda cuando el sidebar está visible

#### Navbar (Barra Superior)

- **Logo y nombre**: AlertaUTEC con su logo
- **Tu información**:
  - Avatar circular con inicial de tu nombre (clic para editar perfil)
  - Tu nombre completo (clic para editar perfil)
  - Badge de rol (Estudiante)
- **Cerrar sesión**: Botón para salir de la aplicación

### 9. Actualizaciones en Tiempo Real

El sistema simula actualizaciones en tiempo real mediante WebSocket:

1. **Indicador de conexión**: 
   - En la página "Mis Incidentes", verás un indicador en el header
   - Punto verde pulsante = Conectado
   - Punto rojo = Desconectado
   - Muestra "En tiempo real" cuando está conectado
   - Muestra la última sincronización (ej: "Hace 5s")

2. **Actualizaciones automáticas**:
   - Cada 8-15 segundos, un incidente puede cambiar de estado automáticamente
   - Recibirás un toast/notificación cuando esto ocurra
   - El incidente se actualiza en la lista sin recargar la página
   - Si el panel de detalles está abierto, también se actualiza

3. **Notificaciones toast**:
   - Aparecen en la esquina superior derecha
   - Diferentes tipos: éxito (verde), error (rojo), info (azul)
   - Se ocultan automáticamente después de unos segundos

### 10. Funcionalidades Adicionales

#### Modales Informativos

- **Guía de usuario**:
  - En el footer, haz clic en "Guía de usuario"
  - Se abre un modal con instrucciones generales del sistema
  - Haz clic fuera del modal o en "Cerrar" para cerrarlo

- **Política de privacidad**:
  - En el footer, haz clic en "Política de privacidad"
  - Se abre un modal con la política de privacidad
  - Haz clic fuera del modal o en "Cerrar" para cerrarlo

#### Enlaces Externos

- **Centro de ayuda**: Redirige a la intranet de UTEC
- **Instagram**: Redirige al perfil de Instagram de UTEC

### 11. Cerrar Sesión

1. Haz clic en "Cerrar sesión" en el navbar
2. Serás redirigido automáticamente a la página de login
3. Tu sesión se cerrará completamente
4. Deberás iniciar sesión nuevamente para acceder

### 12. Responsive Design

El sistema se adapta a diferentes tamaños de pantalla:

- **Desktop**: 
  - Sidebar visible a la izquierda
  - Contenido principal a la derecha
  - Tabla de incidentes en formato de tabla

- **Tablet/Mobile**:
  - Sidebar oculto por defecto (usa el botón toggle para mostrarlo)
  - Contenido principal ocupa todo el ancho
  - Incidentes en formato de cards
  - Navegación optimizada para touch

## 🎮 Cómo Probar la Demo

### Flujo Completo Recomendado

1. **Registrarse**: Ve a `/register`, completa el formulario, verifica redirección a `/login`
2. **Iniciar Sesión**: Usa las credenciales registradas, verifica acceso al dashboard
3. **Explorar Dashboard**: Revisa las estadísticas y secciones en la página de inicio
4. **Crear Incidente**: Crea un nuevo incidente, verifica que aparece inmediatamente
5. **Abrir Panel**: Haz clic en el incidente creado, verifica que el panel se abre
6. **Agregar Comentario**: Agrega un comentario, verifica que aparece en el timeline
7. **Usar Chat**: Si hay trabajador asignado, envía un mensaje y espera respuesta
8. **Esperar WebSocket**: Espera 8-15 segundos, verifica que llega una actualización
9. **Ver Actualización**: Verifica que el estado del incidente cambia automáticamente
10. **Ver Historial**: Navega a Historial, verifica que puedes ver incidentes resueltos
11. **Editar Perfil**: Haz clic en tu nombre, actualiza tu información, verifica cambios
12. **Cerrar Sesión**: Cierra sesión y verifica que vuelves al login

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
