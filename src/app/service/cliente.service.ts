import { Cliente } from './../domain/cliente';
import { Observable } from 'rxjs';
import { ClienteModel } from './../model/cliente-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  url = 'http://localhost:8080/cliente/';

  constructor(private http: HttpClient) {}

  cadastrar(model: ClienteModel): Observable<ClienteModel> {
    return this.http.post<ClienteModel>(this.url + 'cadastrar', model);
  }

  alterar(model: ClienteModel): Observable<ClienteModel> {
    return this.http.put<ClienteModel>(this.url + 'alterar', model);
  }

  consultar(): Observable<ClienteModel[]> {
    return this.http.get<ClienteModel[]>(this.url + 'consultar');
  }

  remover(id: string): Observable<ClienteModel> {
    return this.http.delete<ClienteModel>(this.url + 'remover/' + id);
  }
}
