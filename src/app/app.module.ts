import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticulosComponent } from './articulos/articulos.component';

const rutas:Routes=[
  {path:'',component:InicioComponent, pathMatch:'full'},//ruta vacia
{path:'inicio', component:InicioComponent},
{path:'articulos', component:ArticulosComponent},
{path: '**', redirectTo: '/', pathMatch: 'full'}//Ruta que no existe
];

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    InicioComponent,
    ArticulosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
