# ExamenAngular JERG

## commit 1

HACEMOS UN REPO Y LO CLONAMOS (LEYENDO EL EXAMEN POR SI HAY ALGO RARO)

- En consola
~~~
ng new ExamenRodriguezGonzalez --routing true -S
~~~
- Elegimos CSS

## commit 2

- En el src/app/**app.component.ts** vinculamos las hojas de estilo (styleUrls) * modificamos el title a 'Examen Rodriguez Gonzalez'
- En el src/app/**app.component.html** cortamos todo lo de la etiqueta <style> y lo pegamos en src/app/app.component.css
- En **package.json** para modificar los parametros del ng start (puerto...etc) 
    - donde dice:
      ~~~
      "start": "ng serve"
      ~~~
    - debe decir
      ~~~
      "start": "ng serve -o --port 4234"
      ~~~
- En consola

    ~~~
    npm start 
    ~~~

    para sacar por localhost la página.

## commit 3

- instalamos bootstrap
    - En consola:
        ~~~
        npm install bootstrap
        npm i @popperjs/core
        ~~~
Luego navegue a su aplicación angular 13 y abra el archivo angular.json. Y luego agregue el siguiente código en él; como sigue:

    ~~~
"styles": [
              ...
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
          ],
"scripts": [
              ...
               "node_modules/bootstrap/dist/js/bootstrap.min.js"
           ]
    ~~~

angular.json debe de quedar se la siguiente manera y aplicandolo a inmoguanche
    
    ~~~
    {
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "frontend": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:application": {
          "strict": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/frontend",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "browserTarget": "frontend:build:production"
            },
            "development": {
              "browserTarget": "frontend:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "frontend:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.spec.json",
            "karmaConfig": "karma.conf.js",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
          }
        }
      }
    }
  },
  "defaultProject": "InmoGuancheCRM"
}

    
    ~~~
    
    
## commit 4

- ENTRAMOS EN src/app/**app.module.ts** E IMPORTAMOS EL MODULO HttpClientModule: (OJO NO TE LO OFRECE, HAY QUE PICARLO TAL CUAL):

- nos tiene que quedar de la siguiente manera
    ~~~
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';

    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';

    import { HttpClientModule } from '@angular/common/http';

@NgModule({
declarations: [
AppComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
    ~~~
- CREAR CORE MODULE
    - En consola:
    ~~~
    ng g m core
    ~~~

- IMPORTAMOS CoreModule EN src/app/app.module.ts, solo en imports, la importacion de CoreModule es automatica:

- Nos tiene que quedar de la siguiente manera:
    ~~~
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';

    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';

    import { HttpClientModule } from '@angular/common/http';
    import { CoreModule } from './core/core.module';



    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
    ~~~

- Creamos los componentes del Core.
    - En consola:
    ~~~
    ng g c core/shell
    ng g c core/shell/header
    ng g c core/shell/main
    ng g c core/shell/footer
    ~~~

- En src/app/core/shell/shell.component.html lo dejamos de la siguiente manera:
    ~~~
    <app-shell></app-shell>
    ~~~

- Importamos en src/app/core/core.module.ts el modulo de RouterModule.
    - debe de quedar de la siguiente manera.
        ~~~
        import { NgModule } from '@angular/core';
        import { CommonModule } from '@angular/common';
        import { ShellComponent } from './shell/shell.component';
        import { HeaderComponent } from './shell/header/header.component';
        import { MainComponent } from './shell/main/main.component';
        import { FooterComponent } from './shell/footer/footer.component';
        import { RouterModule } from '@angular/router';



        @NgModule({
        declarations: [
            ShellComponent,
            HeaderComponent,
            MainComponent,
            FooterComponent
        ],
        imports: [
            CommonModule,
            RouterModule
        ]
        })
        export class CoreModule { }
        ~~~

- Dentro de src/app/core/shell/main/main.component.html lo dejamos tal que así
    ~~~
    <div>
        <router-outlet></router-outlet>
    <div>
    ~~~

- Creamos el componente not found dentro del modulo Core.
    - En consola
    ~~~
    ng g c core/not-found
    ~~~

- CREAMOS EL MODULO Y COMPONENTE HOME:
    - En consola
        ~~~
        ng g m home --routing true
        ng g c home/home
        ~~~

## commit 5

- En src/app/core/core.module.ts debemos exportar ShellComponent, debemos de dejar el archivo de la siguiente manera:
    ~~~
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ShellComponent } from './shell/shell.component';
    import { HeaderComponent } from './shell/header/header.component';
    import { MainComponent } from './shell/main/main.component';
    import { FooterComponent } from './shell/footer/footer.component';
    import { RouterModule } from '@angular/router';



    @NgModule({
    declarations: [
        ShellComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ShellComponent
        ]
    })
    export class CoreModule { }
    ~~~

- En src/app/app.component.html lo dejamos con solo lo siguiente:
    ~~~
    <app-shell></app-shell>
    ~~~


- En src/environments/environment.prod.ts modificamos el archivo para que pueda embeber de la api que queremos que expote. En el caso de StarWars queda de la siguiente manera:
    ~~~
    export const environment = {
    production: true,
    logo: '../assets/img/darthVader.jpg',
    host: 'http://swapi.dev/api/',
    itemsPorPagina: 10
    };
    ~~~

- En src/environments/environment.ts lo dejamos de la siguiente manera el codigo no comentado.
    ~~~
    export const environment = {
    production: false,
    logo: '../assets/img/startwars.png',
    host: 'http://swapi.dev/api/',
    itemsPorPagina: 10
    };
    ~~~

- Añadimos rutas en src/app/app-routing.module.ts al loro que el componente not found te da fallo y hay que importarlo. tiene que quedar de la siguiente manera.
    ~~~
    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { NotFoundComponent } from './core/not-found/not-found.component';

    const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
        },
        {
        path: "not-found" , component: NotFoundComponent
        },
        {
        path: "**" , //cualquier valor que no este indicado
        redirectTo: "not-found"
        },
    ];

    @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }
    ~~~

## commit 6

- En src/app/core/shell/shell.component.html debe de quedar asi:
~~~
<app-header></app-header>
<app-main></app-main>
<app-footer></app-footer>

~~~


- Añadimo Header en src/app/core/shell/header/header.component.html dejandolo de la siguiente manera
~~~
<nav class="navbar navbar-expand-lg navbar-dark bg-dark align-items-center fixed-top">
  <a class="navbar-brand " routerLink="/"><span
  class="sr-only">(current)</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ejercicioProto"
  aria-controls="navbarSupportedContent" aria-controls="ejercicioProto" aria-expanded="false"
  aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="ejercicioProto">
  <ul class="navbar-nav mr-auto">
  <li class="nav-item dropdown pt-3" routerLinkActive="router-link-active">
  <a class="nav-link dropdown-toggle lera" id="navbarDropdown" role="button" data-toggle="dropdown"
  aria-haspopup="true" aria-expanded="false">
  Personajes
  </a>
  <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
  <a class="dropdown-item text-warning" routerLink="personajes">Todos</a>
  <a class="dropdown-item text-warning" routerLink="personajes/formulario">Crear Personaje</a>
  </div>
  </li>
  </ul>
  </div>
  </nav>

~~~

- CREAMOS EL MODULO DE PERSONAJES O LO QUE SEA:

    - En consola
        ~~~
        ng g m personajes --routing true
        ~~~

- AÑADIMOS LA RUTA EN src/app/app-routing.module.ts
~~~
{
path: 'personajes',
loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
},
~~~


- CREAMOS COMPONENTES DENTRO DEL MODULO PERSONAJES:

    - En consola
~~~
ng g c personajes/personajes
ng g c personajes/personaje-item
ng g c personajes/personaje-form
~~~

- añadimos ruta en src/app/personajes/personajes-routing.module.ts quedando de la siguiente manera
~~~
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [
  {
    path: '',
    component: PersonajesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
~~~

- IMPORTAMOS FORMSMODULE EN src/app/personajes/personajes.module.ts:

~~~
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeItemComponent } from './personaje-item/personaje-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonajesComponent,
    PersonajeItemComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    FormsModule
  ]
})
export class PersonajesModule { }

~~~

- CREAMOS INTERFAZ DENTRO DE MODULO PERSONAJES Y DECLARAMOS TODOS LOS ATRIBUTOS QUE APAREZCAN EN LA API:

En Consola:

~~~
ng g i personajes/models/personaje
~~~

Lo dejamos asi:
~~~
export interface Personaje {
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
}
~~~

- REAMOS LA CLASE DENTRO DEL MÓDULO PERSONAJES

En consola

~~~
ng g class personajes/models/personaje-impl
~~~

Implemento lo siguiente en la clase personajes/models/personaje-impl

~~~
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
~~~


COMPONENTE CONTENEDOR src/app/personajes/personajes/personajes.component.ts:

~~~
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
~~~


- modificamos src/app/personajes/personajes/personajes.component.html

~~~
<div class="row">
  <div class="col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3">NOMBRE</div>
  <div class="col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">GÉNERO</div>
  <div class="col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3">FECHA NACIMIENTO</div> 

</div>

~~~

COMPONENTE PRESENTADOR src/app/personajes/personaje-item/personaje-item.component.ts:

~~~
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaje-item',
  templateUrl: './personaje-item.component.html',
  styleUrls: ['./personaje-item.component.css']
})
export class PersonajeItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

~~~

COMPONENTE PRESENTADOR src/app/personajes/personaje-item/personaje-item.component.html:
~~~
<div class="row mb-1">
  <hr class='w-100'>
  <div class="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-3"><a class="" data-toggle="modal"
      data-target="#modalPersonaje" (click)='personajeSeleccionado.emit(personaje)'> {{personaje.nombre}}</a></div>
  <div class="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2">{{personaje.genero | i18nSelect: genderMap}}</div>
  <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">{{personaje.fechaNac | lowercase}}</div>
  <div class="col-16 col-sm-6 col-md-3 col-lg-2 col-xl-2">
      <button class="btn btn-info" [routerLink]="['/planeta', personaje.planeta]">Planeta</button>
  </div>
  <div class="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
        <div *ngIf='personaje.colorPelo != "none" && personaje.colorPelo != "n/a"; else elseBlock'>{{personaje.colorPelo}}
        </div>
 </div>
 <ng-template #elseBlock>
      <span>No tengo Pelo</span>
 </ng-template>
</div>

~~~

CREACION SERVICIO GLOBAL (TRANSVERSAL) A TODA LA APLICACION:

En consola:
~~~
ng g service service/auxiliar
~~~


en src/app/service/auxiliar.service.ts

~~~

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuxiliarService {
  itemsPorPagina: number = environment.itemsPorPagina;

  constructor(private http: HttpClient) { }

  getItemsResponse(respuestaApi: any): number {
    return respuestaApi.count;
  }

  getPaginasResponse(respuestaApi: any): number {
    return Math.ceil(this.getItemsResponse(respuestaApi) / this.itemsPorPagina);
  }

  getItemsPorPagina(urlEndPoint: string, pagina: number): Observable<any> {
    return this.http.get<any>(`${urlEndPoint}?page=${pagina}`)
  }
}
~~~

AÑADIR COMO PROVEEDOR EL SERVICIO AUXILIARSERVICE EN PERSONAJES MODULE:
debe de quedar asi

~~~
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeItemComponent } from './personaje-item/personaje-item.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';


NgModule({
  declarations: [PersonajesComponent, 
    PersonajeItemComponent],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class PersonajesModule { }

~~~

CREACION SERVICIO EN EL MODULO PERSONAJES

En Consola:

~~~
ng g service personajes/service/personaje
~~~

El archivo src/app/personajes/service/personaje.service.ts debe de quedar asi

~~~
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
~~~


En src/app/personajes/personaje-form/personaje-form.component.ts
~~~

import { Component, OnInit } from '@angular/core';
import { PersonajeImpl } from '../models/personaje-impl';
import { PersonajeService } from '../service/personaje.service';

@Component({
  selector: 'app-personaje-form',
  templateUrl: './personaje-form.component.html',
  styleUrls: ['./personaje-form.component.css']
})
export class PersonajeFormComponent implements OnInit {
  personaje: PersonajeImpl = new PersonajeImpl('', '', '', '', '', '', '', '', '', []);

  constructor(private personajeService: PersonajeService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.personajeService.create(this.personaje);
  }

}
~~~


