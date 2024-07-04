import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';


export const routes: Routes = [
  {
    path:'home',
    component: HomePageComponent

  },
  {
    path:'ListaFormulario',
    redirectTo: 'home'
  },
  {
    path:'CrearFormulario',
    component: FormsPageComponent

  },
  {
    path:'**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
