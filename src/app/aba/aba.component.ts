import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../Servicos/servico.service';
import { Pessoa } from '../Interface/interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aba',
  templateUrl: './aba.component.html',
  styleUrls: ['./aba.component.css']
})
export class AbaComponent implements OnInit {
  pessoa!: Pessoa[];
  myGroup = FormGroup;

  constructor(private server: ServicoService ){}

  ngOnInit() {
    this.server.list().subscribe(dados => this.pessoa = dados);
  }

  // vai(){
  //   this.formulario = this.fb.group({
  //     nome: [null],
  //     email: [null],
  //     senha: [null],
  //     endereco: [null],
  //     complemento: [null],
  //     cidade: [null],
  //     estado: [null],
  //   })
  // }

  // onSubmit(){
  //   this.server.list().subscribe();
  //   console.log()
  // }



}
