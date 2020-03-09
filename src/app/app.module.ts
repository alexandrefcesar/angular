import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeadComponent } from './head/head.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ProdutoComponent } from './produto/produto.component';
import { PessoaManterComponent } from './pessoa/pessoa-manter/pessoa-manter.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeadComponent,
    BarraLateralComponent,
  
    PessoaComponent,
  
    ProdutoComponent,
  
    PessoaManterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
