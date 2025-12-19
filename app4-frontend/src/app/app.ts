import { Component } from '@angular/core';
import { SaludoComponent } from './saludo/saludo'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SaludoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }
