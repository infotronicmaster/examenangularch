import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICurso } from 'src/app/shared/interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosDestacadosService {
  url= 'http://examen-nh.jcramireztello.com/api/v1/course/?featured=true';

  constructor( private http: HttpClient) { }

  getcursosd() {
    return this.http.get<ICurso[]>(`${this.url}`);
  }

}
