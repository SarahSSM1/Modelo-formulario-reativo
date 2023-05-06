import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bandas } from '../Interface/interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

 private readonly url = ' http://localhost:3000/Bandas'

  constructor(private http: HttpClient) {}

  list(){
    return this.http.get<Bandas[]>(this.url)
      .pipe(
        tap(console.log)
      )
  }

}
