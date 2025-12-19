import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './saludo.html',
  styleUrl: './saludo.css'
})
export class SaludoComponent {
  nombre: string = '';
  respuesta: string = '';

  enviarNombre() {
    this.respuesta = `Hola ${this.nombre}, ¡el frontend está conectado!`;
  }
}
