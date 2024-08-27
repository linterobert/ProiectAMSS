import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule],
  providers: [LoginService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private loginService: LoginService) { }

  register(arg0: string,arg1: string,arg2: string) {
    console.log(arg0, arg1, arg2);
    this.loginService.Auth(arg0, arg1, arg2).subscribe(
      rez => {
        window.location.href = 'http://localhost:4200/login';
      },
      error => {
        window.location.href = 'http://localhost:4200/login';
        console.log(error);
      }
    )
  }

  username: string = '';
  password: string = '';
  userType: any;
}
