import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { FooterHomeComponent } from './components/footer-home/footer-home.component';
import { FooterFormComponent } from './components/footer-form/footer-form.component';
import { GeneralDataFormComponent } from './components/general-data-form/general-data-form.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomePageComponent,
    HomeComponent,
    TableComponent,
    FooterHomeComponent,
    FooterFormComponent,
    GeneralDataFormComponent,
    FormsPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    HttpClientModule
  ]
})
export class ModulesModule { }
