import { Component } from '@angular/core';
import { SaludoComponent } from './saludo/saludo'; // Verifica que la ruta sea correcta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SaludoComponent], // Agrega SaludoComponent aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }