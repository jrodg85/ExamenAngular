import { Personaje } from './personaje';

export class PersonajeImpl implements Personaje {
  nombre: string;
  estatura: string;
  peso: string;
  colorPelo: string;
  colorPiel: string;
  colorOjos: string;
  fechaNac: string;
  genero: string;
  planeta: string;
  peliculas: any[];

  // tslint:disable-next-line: max-line-length
  constructor(name: any, height: any, mass: any, hair_color: any, skin_color: any, eye_color: any, birth_year: any, gender: any, homeworld: any, films: any[]) {
    this.nombre = name;
    this.estatura = height;
    this.peso = mass;
    this.colorPelo = hair_color;
    this.colorPiel = skin_color;
    this.colorOjos = eye_color;
    this.fechaNac = birth_year;
    this.genero = gender;
    this.planeta = this.getIdMundo(homeworld);
    this.peliculas = films;
  }

  getIdMundo(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }
}
