import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Personaje } from '../models/personaje';
import { PersonajeImpl } from '../models/personaje-impl';
import { PersonajeService } from '../service/personaje.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  personajes: Personaje[] = [];
  todosPersonajes: Personaje[] = [];
  personajeVerDatos: Personaje = new PersonajeImpl('','','','','','','','','',[],);
  numPaginas: number = 0;

  constructor(
    private personajeService: PersonajeService,
    private auxService: AuxiliarService) { }

  ngOnInit(): void {
    this.personajeService.getPersonajes().subscribe((response) => this.personajes = this.personajeService.extraerPersonajes(response));
    this.getTodosPersonajes();
  }

  verDatos(personaje: Personaje): void {
    this.personajeVerDatos = personaje;
  }

   onPersonajeEliminar(personaje: Personaje): void {
    console.log(`He eliminado a ${personaje.nombre}`);
    this.personajes = this.personajes.filter(p => personaje !== p)
  }

  getTodosPersonajes(): void {
    this.personajeService.getPersonajes().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.personajeService.getPersonajesPagina(index)
          .subscribe(response => {
            this.todosPersonajes.push(...this.personajeService.extraerPersonajes(response));
          });
      }
    });
  }
}
