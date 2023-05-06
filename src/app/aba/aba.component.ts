import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../Servicos/servico.service';
import { Bandas } from '../Interface/interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aba',
  templateUrl: './aba.component.html',
  styleUrls: ['./aba.component.css']
})
export class AbaComponent implements OnInit {
  banda!: Bandas[];
  //banda$!: Observable<Bandas[]>

  constructor(private server: ServicoService ){}

  ngOnInit() {
    this.server.list().subscribe(dados => this.banda = dados);
    //this.banda$ = this.server.list();
  }

}
