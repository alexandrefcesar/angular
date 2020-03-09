import { Component, OnInit } from '@angular/core';
import { Produto } from './Produto';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor() { }

  produto: Produto = new Produto();
  listaUnidades: string[] = ["UN","KG","L","M"];
  ngOnInit(): void {
  }
  listaProduto: Produto[] = [];


  incluirProduto() {
    this.listaProduto.push(this.produto)
    this.produto = new Produto()
  }
 
  removerProduto(produto){
    this.listaProduto = this.listaProduto.filter(
      obj => obj !== produto);
  }

}
