import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../Servicos/servico.service';
import { Observable} from 'rxjs';
import { artistas } from './interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aba',
  templateUrl: './aba.component.html',
  styleUrls: ['./aba.component.css'],
})
export class AbaComponent implements OnInit {
 banda!: artistas[];
 form!: FormGroup;

//  artista = new FormGroup ({
//   nome: new FormControl(""),
//   musica: new FormControl("")
// })

 constructor( private service: ServicoService,
              private fb: FormBuilder,
              private route: ActivatedRoute){}

 ngOnInit() {
  //this.service.list().subscribe(dados => this.banda = dados);

  const banda = this.route.snapshot.data['banda']
    this.form = this.fb.group({
      id: [banda.id],
      nome: [banda.nome],
      musica: [banda.musica]
    })
  }

  obter(){
      if(this.form.valid){
        console.log('enviers')
      }
    }
  }
