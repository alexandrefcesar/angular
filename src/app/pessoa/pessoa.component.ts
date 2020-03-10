import { Component, OnInit } from '@angular/core';
import { Pessoa } from './Pessoa';
@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  titulo: string = 'Cadastro Pessoa';
  listaEstado: string[] = ["AC","PB","PE"];
  
  listaMunicipios: any[]= [
    {codigo:"1",nome:"Patos"},
    {codigo:"2",nome:"Santa Luzia"},
    {codigo:"4",nome:"João pessoa"},

  ]
  
  mostrar: boolean = false;
  listaPessoa: Pessoa[] = [
    /* {
       "codigo":"1",
       "nome":"genival",
       "telefone":"99999999",
       "dataNascimento": new Date(),
       "endereco":"rua josae",
       "bairro":"centro",
       "cidade":"Recife",
       "estado":"PE",
       "ativo":"true"
   
     },
     {
       "codigo":"1",
       "nome":"Alexandre",
       "telefone":"99999999",
       "dataNascimento":"29091990",
       "endereco":"rua josae",
       "bairro":"centro",
       "cidade":"Recife",
       "estado":"PE",
       "ativo":"false"
   
     }*/

  ];
  texto: string = 'ALEXANDRE';
  pessoa: Pessoa = new Pessoa();
  constructor(

  ) { }

  ngOnInit(): void {

  }
  inverter() {
    this.mostrar = !this.mostrar;

  }
 
  remover(pessoa){
    this.listaPessoa = this.listaPessoa.filter(
      obj => obj !== pessoa);
  }
  adicionarPessoa(pessoa){
    this.listaPessoa.push(pessoa)
  }
  editar(pessoa){
    this.pessoa  = pessoa;

  }
  

  

}
