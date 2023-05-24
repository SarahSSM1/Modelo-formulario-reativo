import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServicoService } from './module/servico.service';
import { Observable} from 'rxjs';
import { artista } from './module/interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aba',
  templateUrl: './aba.component.html',
  styleUrls: ['./aba.component.css'],
  preserveWhitespaces: true
})
export class AbaComponent implements OnInit {
 bandas$!: Observable<artista[]>;

 form!: FormGroup;
 submitted = false

 constructor( private service: ServicoService, private fb: FormBuilder){}

 ngOnInit() {
   this.bandas$ = this.service.list()

   this.form = this.fb.group({
    nome: [null, [Validators.required]],
    musica: [null, [Validators.required]]
   })
 }

 obter(){
  this.submitted = true;
    if(this.form.valid){
      this.service.create(this.form.value).subscribe(
        // success => console.log(success),
        // () => console.log('request completo')
       )
    }
  }

  clean(){
    this.submitted = false
    this.form.reset();
  }



}
