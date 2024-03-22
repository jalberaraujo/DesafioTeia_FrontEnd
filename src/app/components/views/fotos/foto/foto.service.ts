import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foto } from './foto.model';

const urlGetFotos = 'https://jsonplaceholder.typicode.com/photos/';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Foto[]>{    
    return this.http.get<Foto[]>(urlGetFotos)
  }

}
