import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { artistas } from '../aba/interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

 private readonly url = ' http://localhost:3000/artistas'

  constructor(private http: HttpClient) {}

  // list(){
  //   return this.http.get<artistas[]>(this.url)
  //     .pipe(
  //       tap(console.log)
  //     )
  // }

}
