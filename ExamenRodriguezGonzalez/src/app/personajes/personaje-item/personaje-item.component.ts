
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../models/personaje';
import { PersonajeImpl } from '../models/personaje-impl';

@Component({
  selector: 'app-personaje-item',
  templateUrl: './personaje-item.component.html',
  styleUrls: ['./personaje-item.component.css']
})
export class PersonajeItemComponent implements OnInit {
  @Input() personaje: Personaje = new PersonajeImpl('','','','','','','','','',[],);
  @Output() personajeSeleccionado = new EventEmitter<Personaje>();
  genderMap: any = {
    'male': 'Macho', 'female': 'Hembra', 'n/a': 'Sin Género'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
