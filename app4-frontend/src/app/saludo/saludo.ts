import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './saludo.html',
  styleUrl: './saludo.css'
})
export class SaludoComponent {
  nombre: string = '';
  respuesta: string = '';

  async enviarNombre() {
    if (!this.nombre) {
      this.respuesta = "Por favor, escribe un nombre";
      return;
    }

    try {
      const response = await fetch('/api/saludar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: this.nombre })
      });
      
      const data = await response.json();
      this.respuesta = data.mensaje;
    } catch (e) {
      this.respuesta = "Error al conectar con el Backend 4";
      console.error(e);
    }
  }
}
