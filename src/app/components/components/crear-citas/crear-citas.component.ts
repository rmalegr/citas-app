import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css'],
})
export class CrearCitasComponent {
  nombre: '';
  fecha: '';
  hora: '';
  sintomas: '';

  formularioIncorrecto = true;

  constructor() {}

  agregarCita() {
    if (this.nombre && this.fecha && this.hora && this.sintomas) {
      this.formularioIncorrecto = false;
    }
  }
}
