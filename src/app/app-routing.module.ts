import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';

const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioComponent,
  },
  {
    path: 'tabla',
    component: TablaComponent,
  },
  { path: '**', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
