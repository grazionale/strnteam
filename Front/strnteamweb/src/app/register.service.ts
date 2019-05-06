import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  baseUrl  = '';

  register(model: any): Promise<void>{
    return this.http.post<any>(`${this.baseUrl}`, model).toPromise()
    .then(response => {
      localStorage.setItem('token', response.token);
    })
    .catch(response => {
      if (response.status === 400) {
        return Promise.reject('Verificar todos os campos.');
      }
      return Promise.reject(response);
    })
  }
}
