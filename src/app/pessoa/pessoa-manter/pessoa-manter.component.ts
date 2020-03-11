import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa-manter',
  templateUrl: './pessoa-manter.component.html',
  styleUrls: ['./pessoa-manter.component.css']
})
export class PessoaManterComponent implements OnInit {
  texto: string = 'ALEXANDRE';
  titulo: string = 'Cadastro Pessoa';
  listaEstado: string[] = ["AC","PB","PE"];
  @Output() pessoaEmitir: EventEmitter<Pessoa> = new EventEmitter();
  @Input() pessoa: Pessoa = new Pessoa();
  @Input() mostrar: boolean = false;
  @Input() volta: boolean = true;
  @Output() voltaEmitir: EventEmitter<boolean> = new EventEmitter();
  @Input() operacao: string;
  @Output() retornoOperacao: EventEmitter<string> = new EventEmitter();
  listaMunicipios: any[]= [
    {codigo:"1",nome:"Patos"},
    {codigo:"2",nome:"Santa Luzia"},
    {codigo:"4",nome:"João pessoa"},

  ]
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
  constructor() { }
  ola() {
    alert('Ok' + this.texto);
  }
  imprimir() {
    alert('Código: ' + this.pessoa.codigo + ' \nNome: ' + this.pessoa.nome + ' \nTelefone: ' + this.pessoa.telefone + ' \nData de Nascimento: ' +
      this.pessoa.dataNascimento + ' \nEndereço: ' + this.pessoa.endereco + ' \nBairro: ' + this.pessoa.bairro +
      ' \nCidade: ' + this.pessoa.cidade + ' \nEstado: ' + this.pessoa.estado);
  }
  inverter() {
    this.mostrar = !this.mostrar;

  }
  vol() {
    // this.voltaEmitir.emit(false);
    this.retornoOperacao.emit('pesquisar');

  }
  incluir() {
   // this.listaPessoa.push(this.pessoa)
   this.pessoaEmitir.emit(this.pessoa);
    this.pessoa = new Pessoa()
  
  }
  ngOnInit(): void {
  }
  remover(pessoa){
    this.listaPessoa = this.listaPessoa.filter(
      obj => obj !== pessoa);
  }

  carregarCidade(){

    if(this.pessoa.estado == 'PB'){
      this.listaMunicipios = [
        {codigo:"1", nome:"João Pessoa"}
      ]
    }else if (this.pessoa.estado == 'PE'){
      this.listaMunicipios = [
        {codigo:"1", nome:"Recife"}
      ]
    }else{
        this.listaMunicipios = [
          {codigo:"1",nome:"barara"

          }
        ]
    }
    

  }

}
