import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { artista } from './interface';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

 private readonly url = 'http://localhost:3000/artista'

  constructor(private http: HttpClient) {}

  list(){
    return this.http.get<artista[]>(this.url)
    .pipe(
      tap(console.log)
    );
  }

  create(banda:any){
    return this.http.post(this.url, banda)
    .pipe(take(1))
  }

}
