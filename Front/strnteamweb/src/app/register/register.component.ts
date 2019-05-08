import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  model = {
    'name': '',
    'email': '',
    'password': ''
  }

  public register(){
    this.registerService.register(this.model).then(response => {
      this.router.navigate(['/painel']);
    })
    .catch(errorObject => {
      this.model.password = '';    
    });
  };

}
