# Guía para Añadir Imágenes

## Ubicaciones para Imágenes

### 1. Carpeta `public/` (Imágenes Estáticas)

Coloca aquí imágenes que se servirán directamente desde la raíz del sitio.

**Ubicación:** `public/hero-image.jpg`

**Uso en código:**
```tsx
<img src="/hero-image.jpg" alt="Descripción" className="w-full h-[500px] object-cover rounded-3xl" />
```

**Ventajas:**
- Acceso directo desde la raíz (`/imagen.jpg`)
- No se procesan por Vite
- Útil para imágenes grandes o que no cambian

### 2. Carpeta `src/assets/` (Imágenes Importadas)

Coloca aquí imágenes que se importan en los componentes y son procesadas por Vite.

**Ubicación:** `src/assets/logo.svg`

**Uso en código:**
```tsx
import heroImage from '../assets/hero-image.jpg';

<img src={heroImage} alt="Descripción" className="w-full h-[500px] object-cover rounded-3xl" />
```

**Ventajas:**
- Optimización automática por Vite
- Hash en el nombre para cache busting
- Útil para imágenes que se usan en componentes

## Ejemplo en LoginPage

En `src/pages/LoginPage.tsx`, línea ~109, puedes reemplazar el placeholder con:

**Opción 1 (desde public):**
```tsx
<img 
  src="/hero-image.jpg" 
  alt="Sistema de Gestión de Incidentes" 
  className="w-full h-[500px] object-cover rounded-3xl" 
/>
```

**Opción 2 (desde assets):**
```tsx
import heroImage from '../assets/hero-image.jpg';

// En el JSX:
<img 
  src={heroImage} 
  alt="Sistema de Gestión de Incidentes" 
  className="w-full h-[500px] object-cover rounded-3xl" 
/>
```

## Formatos Soportados

- `.jpg`, `.jpeg`
- `.png`
- `.svg`
- `.webp`
- `.gif`

