import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    // Optimiza la detección de cambios para Angular 21
    provideZoneChangeDetection({ eventCoalescing: true }), 
    // Provee las rutas necesarias para evitar el error NG0401
    provideRouter(routes), 
    // Habilita la hidratación necesaria para SSR en Render
    provideClientHydration(withEventReplay())
  ]
};
