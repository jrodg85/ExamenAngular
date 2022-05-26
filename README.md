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
        npm install popper.js --save
        npm install jquery --save
        npm install bootstrap@4.6.1 --save
        ~~~
- se adjuntan al **angular.json**

~~~
"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "./node_modules/mini.css/dist/mini-default.min.css"
          ],
 "scripts": [
              "node_modules/jquery/dist/jquery.slim.min.js",
              "node_modules/popper.js/dist/umd/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
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










