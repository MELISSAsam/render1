import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**', // Aplica a todas las rutas, incluyendo la raíz
    renderMode: RenderMode.Prerender
  }
];
