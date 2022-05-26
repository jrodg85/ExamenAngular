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

- fontawesome (0.10.x	13.x	5.x && 6.x	soportado)
    - En consola
        ~~~
        npm install @fortawesome/fontawesome-svg-core
        npm install @fortawesome/free-solid-svg-icons
        ~~~
    - ver en https://github.com/FortAwesome/angular-fontawesome la compatibilidad, en caso de angular 13, 0.10.X
    - En Consola
        ~~~
        npm install @fortawesome/angular-fontawesome@0.10.x
        ~~~
    - en src/app/**app.module.ts** tiene que quedar asi... hay que añadir el router module por que si no despues va a dar errores
        ~~~
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
        import { AppComponent } from './app.component';
        import { RouterModule } from '@angular/router';


        @NgModule({
        imports: [
            BrowserModule,
            FontAwesomeModule,
            RouterModule
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
        })
        export class AppModule { }
        ~~~
    - añadir a src/app/**app.component.ts** lo siguiente
        ~~~
        import { Component } from '@angular/core';
        import { faCoffee } from '@fortawesome/free-solid-svg-icons';

        @Component({
        selector: 'app-root',
        templateUrl: './app.component.html'
        })
        export class AppComponent {
        faCoffee = faCoffee;
        }
        ~~~
    - **Quedando src/app/app.component.ts de la siguiente manera:**
        
        ~~~
        import { Component } from '@angular/core';
        import { faCoffee } from '@fortawesome/free-solid-svg-icons';


        @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
        })
        export class AppComponent {
        title = 'Examen Rodriguez Gonzalez';

        faCoffee = faCoffee;

        }
        ~~~

    - Añadir a src/app/**app.component.html** la siguiente linea:

    ~~~
    <fa-icon [icon]="faCoffee"></fa-icon>
    ~~~

    - **Quedando src/app/app.component.html de la siguiente manera**

        ~~~
        <router-outlet></router-outlet>
        <fa-icon [icon]="faCoffee"></fa-icon>
        ~~~
**la pagina de angular se queda en blanco... no asustarse.**

## commit 5

- En Consola 
~~~
ng g m core
ng g m home --routing true
ng g c core/shell
ng g c core/shell/header
ng g c core/shell/main
ng g c core/shell/footer
ng g c core/not-found
~~~




