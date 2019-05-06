import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private router: Router,) { }

  ngOnInit() {  }
  
  public showAlert = false;
  
  public model = {
    'email': '',
    'password': '',
    'token': '' 
  }

  public login(){
    this.loginService.login(this.model).then(response => {
      this.router.navigate(['/painel']);

    })
    .catch(errorObject => {
      this.model.password = '';    
      this.showAlert = true;
    });
  };


  

}
