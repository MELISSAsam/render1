import { Routes } from '@angular/router';
import { SaludoComponent } from './saludo/saludo';

export const routes: Routes = [
  { path: '', component: SaludoComponent }, // Carga el formulario al inicio
  { path: '**', redirectTo: '' }            // Evita errores de ruta no encontrada
];
