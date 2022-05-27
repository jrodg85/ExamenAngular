import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Personaje } from '../models/personaje';
import { PersonajeImpl } from '../models/personaje-impl';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}people`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }


  getPersonajes(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerPersonajes(respuestaApi: any): Personaje[] {
    const personajes: Personaje[] = [];
    respuestaApi.results.forEach((p: any) => {
      personajes.push(this.mapearPersonaje(p));

    });
    return personajes;
  }

  mapearPersonaje(personajeApi: any): PersonajeImpl {
    return new PersonajeImpl(
      personajeApi.name,
      personajeApi.height,
      personajeApi.mass,
      personajeApi.hair_color,
      personajeApi.skin_color,
      personajeApi.eye_color,
      personajeApi.birth_year,
      personajeApi.gender,
      personajeApi.homeworld,
      personajeApi.films);
  }

  create(personaje: Personaje): void {
    console.log(`Se ha creado el personaje: ${JSON.stringify(personaje)}`);
  }

  getPersonajesPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}
