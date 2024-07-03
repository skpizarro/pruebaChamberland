import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'comerciantes',
    loadChildren: () => import('./modules/modules.module').then(m=> m.ModulesModule)
  },
  {
    path:'**',
    redirectTo: 'comerciantes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
