# AlertaUTEC - Estructura Completa del Proyecto

## 📁 Árbol de Archivos

```
Alerta-UTEC-frontend/
├── .env.example                    # Variables de entorno de ejemplo
├── .gitignore
├── index.html                      # HTML principal
├── package.json                    # Dependencias y scripts
├── postcss.config.cjs              # Configuración PostCSS
├── README.md                       # Documentación principal
├── PROJECT_STRUCTURE.md            # Este archivo
├── tailwind.config.cjs             # Configuración Tailwind
├── tsconfig.json                   # Configuración TypeScript
├── tsconfig.node.json
├── vite.config.ts                 # Configuración Vite
│
├── public/                         # Archivos estáticos
│   └── .gitkeep
│
└── src/
    ├── App.tsx                     # Componente raíz
    ├── main.tsx                    # Punto de entrada
    │
    ├── assets/                     # Imágenes y recursos
    │   ├── alerta.png
    │   ├── campana.png
    │   ├── check.png
    │   ├── estadisticas.png
    │   ├── google_logo.png
    │   ├── laptop.png
    │   ├── relampago.png
    │   ├── reporte.png
    │   ├── students_login.jpg
    │   └── tecnologia-Photoroom.png
    │
    ├── components/
    │   ├── common/
    │   │   ├── Button.tsx          # Botón reutilizable
    │   │   ├── Input.tsx           # Input reutilizable
    │   │   ├── Loader.tsx          # Spinner de carga
    │   │   ├── PrivacyPolicyModal.tsx  # Modal de políticas
    │   │   ├── ProtectedRoute.tsx  # Ruta protegida
    │   │   ├── RoleGuard.tsx       # Guard de roles
    │   │   ├── Select.tsx          # Select reutilizable
    │   │   ├── Toast.tsx          # Componente Toast
    │   │   ├── ToastProvider.tsx  # Provider de toasts
    │   │   └── UserGuideModal.tsx  # Modal de guía
    │   │
    │   ├── incidents/
    │   │   ├── IncidentDetailPanel.tsx  # Panel lateral de detalle
    │   │   ├── IncidentFilters.tsx      # Filtros de incidentes
    │   │   ├── IncidentForm.tsx         # Formulario de creación
    │   │   ├── IncidentRow.tsx          # Fila de incidente
    │   │   ├── IncidentStatusBadge.tsx  # Badge de estado
    │   │   ├── IncidentSummaryCards.tsx # Cards de resumen
    │   │   ├── IncidentTable.tsx        # Tabla de incidentes
    │   │   └── IncidentTimeline.tsx     # Timeline/historial
    │   │
    │   └── layout/
    │       ├── AppLayout.tsx       # Layout principal
    │       ├── Navbar.tsx          # Barra de navegación
    │       └── Sidebar.tsx         # Sidebar de navegación
    │
    ├── config/
    │   └── constants.ts            # Constantes (URLs, etc.)
    │
    ├── context/
    │   ├── AuthContext.tsx         # Context de autenticación
    │   └── WebSocketContext.tsx    # Context de WebSocket (no usado en mock)
    │
    ├── hooks/
    │   ├── useAuth.ts              # Hook de autenticación
    │   ├── useIncidentes.ts        # Hook de incidentes (CRUD mock)
    │   ├── useScrollAnimation.ts  # Hook de animación scroll
    │   └── useWebSocket.ts         # Hook de WebSocket (no usado)
    │
    ├── mocks/
    │   ├── incidentes.ts           # Datos mock de incidentes
    │   └── usuarios.ts             # Datos mock de usuarios
    │
    ├── pages/
    │   ├── HomePage.tsx            # Página principal/landing
    │   ├── IncidentDetailPage.tsx  # Página de detalle (legacy)
    │   ├── LoginPage.tsx           # Página de login
    │   ├── RegisterPage.tsx         # Página de registro
    │   ├── SupervisorDashboard.tsx # Dashboard supervisor (legacy)
    │   ├── TrabajadorDashboard.tsx # Dashboard trabajador (legacy)
    │   └── UsuarioDashboard.tsx    # Dashboard estudiante (COMPLETO)
    │
    ├── router/
    │   └── index.tsx               # Configuración de rutas
    │
    ├── services/
    │   ├── apiClient.ts            # Cliente API base
    │   ├── authApi.ts              # API de autenticación
    │   ├── incidentesApi.ts        # API de incidentes (preparado para backend)
    │   └── wsMock.ts               # Simulación WebSocket ⭐
    │
    ├── styles/
    │   └── index.css               # Estilos globales + Tailwind
    │
    ├── types/
    │   ├── auth.ts                 # Tipos de autenticación
    │   └── incidentes.ts           # Tipos de incidentes
    │
    └── utils/
        └── userStorage.ts          # Utilidades de almacenamiento
```

## 🎯 Archivos Clave para Modificar

### Para cambiar datos mock:
- **Incidentes iniciales**: `src/mocks/incidentes.ts` → `mockIncidentesIniciales`
- **Historial inicial**: `src/mocks/incidentes.ts` → `mockHistorialInicial`
- **Usuarios demo**: `src/mocks/usuarios.ts` → `mockUsuarios`

### Para ajustar WebSocket simulado:
- **Intervalo de actualizaciones**: `src/services/wsMock.ts` → línea ~30 (cambiar `8000 + Math.random() * 7000`)
- **Lógica de estados**: `src/services/wsMock.ts` → método `emitRandomUpdate()`

### Para cambiar configuración:
- **URLs**: `src/config/constants.ts`
- **Variables de entorno**: `.env` (crear desde `.env.example`)

## ✅ Estado de Implementación

### ✅ Completamente Implementado:
- ✅ Login con formulario + botón rápido "Entrar como Estudiante"
- ✅ Registro de usuarios (guardado en localStorage)
- ✅ Dashboard Estudiante completo
- ✅ Crear incidente con optimistic UI
- ✅ Panel lateral de detalle
- ✅ Agregar comentarios al historial
- ✅ WebSocket simulado con actualizaciones automáticas
- ✅ Toasts/notificaciones
- ✅ Summary cards
- ✅ Timeline/historial visual
- ✅ Indicador de conexión WS
- ✅ Estados de UI (loading, empty, error)

### ⚠️ Preparado pero no usado:
- `WebSocketContext.tsx` - Para cuando haya WebSocket real
- `incidentesApi.ts` - Funciones listas para backend real
- `authApi.ts` - Función de login real preparada

## 🧪 Pruebas Manuales

### Flujo 1: Registro → Login → Dashboard
1. Ve a `/register`
2. Completa el formulario (usa email @utec.edu.pe)
3. Verifica redirección a `/login`
4. Inicia sesión con las credenciales registradas
5. Verifica acceso al dashboard

### Flujo 2: Login Rápido → Crear Incidente
1. Ve a `/login`
2. Haz clic en "Entrar como Estudiante"
3. Verifica acceso inmediato al dashboard
4. Haz clic en "+ Nuevo incidente"
5. Completa el formulario y envía
6. **Verifica**: El incidente aparece inmediatamente (optimistic UI)
7. **Espera 800ms**: Verifica toast de confirmación

### Flujo 3: Ver Detalle → Agregar Comentario
1. En el dashboard, haz clic en cualquier incidente
2. **Verifica**: Se abre panel lateral desde la derecha
3. Revisa la información del incidente
4. Desplázate hasta "Agregar Comentario"
5. Escribe un comentario y envía
6. **Verifica**: El comentario aparece inmediatamente en el timeline
7. **Verifica**: Toast de confirmación

### Flujo 4: WebSocket Simulado
1. Deja el dashboard abierto
2. **Espera 8-15 segundos**
3. **Verifica**: 
   - Toast aparece: "Incidente actualizado: [Estado]"
   - El estado de un incidente cambia automáticamente
   - El indicador WS muestra "En tiempo real" (punto verde)
   - La última sincronización se actualiza
4. Si el panel de detalle está abierto, verifica que se actualiza también

### Flujo 5: Empty State
1. Crea una cuenta nueva (o limpia localStorage)
2. Inicia sesión
3. **Verifica**: Mensaje amigable "No hay incidentes reportados"
4. **Verifica**: Botón "Reportar primer incidente"

## 📝 Notas de Integración Backend

Cuando el backend esté listo:

1. **Configurar `.env`**:
```env
VITE_API_URL=https://tu-api.com
VITE_WS_URL=wss://tu-api.com/ws
```

2. **Reemplazar servicios**:
   - `src/services/incidentesApi.ts` - Ya tiene funciones listas
   - `src/services/wsMock.ts` - Reemplazar con WebSocket real
   - `src/hooks/useIncidentes.ts` - Cambiar de mock a llamadas API

3. **Actualizar AuthContext**:
   - Usar `login()` real en lugar de `loginAs()` para usuarios registrados

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build

# Preview producción
npm run preview

# Lint
npm run lint
```

---

**Proyecto listo para demo en hackathon** 🎉

