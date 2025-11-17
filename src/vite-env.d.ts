/// <reference types="vite/client" />

// Declaraciones para assets por si 'vite/client' no es suficiente
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';

// Declaración de tipos para variables de entorno
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_WS_URL: string;
  readonly VITE_INTRANET_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

