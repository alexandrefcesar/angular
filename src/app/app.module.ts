import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeadComponent } from './head/head.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { BsLocaleService, defineLocale } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeadComponent,
    BarraLateralComponent,
  
    PessoaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsLocaleService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
