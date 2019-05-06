import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }
  
  //400 - http://www.mocky.io/v2/5cd08cf43200005e0000fd78
  baseUrl  = 'http://www.mocky.io/v2/5cd08cf43200005e0000fd78';
  //200 - http://www.mocky.io/v2/5cd08ead3200000f0000fd7f
  // baseUrl  = 'http://www.mocky.io/v2/5cd08ead3200000f0000fd7f';

  login(model: any): Promise<void>{
    return this.http.post<any>(`${this.baseUrl}`, model).toPromise()
    .then(response => {
      localStorage.setItem('token', response.token);
    })
    .catch(response => {
      if (response.status === 400) {
        return Promise.reject('Usuário ou senha inválida!');
      }
      return Promise.reject(response);
    })
  }
}
