import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormBuilder } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, NavegacionComponent, FormularioComponent, TablaComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
