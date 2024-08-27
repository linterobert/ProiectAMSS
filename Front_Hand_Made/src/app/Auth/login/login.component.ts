import { Component } from '@angular/core';
import { LoginService } from '../../Services/login-service';
import { HttpClientModule } from '@angular/common/http';
import { loginToken } from '../../Interfaces/login-token';
import { AuthToken } from '../../Interfaces/AuthToken';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule  
  ],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private loginService : LoginService
  ) { }
  
  redirectToRegister() {
    window.location.href = 'http://localhost:4200/register';
  }

  login(username: string, password: string) {
    console.log('Username:', username);
    console.log('Password:', password);

    this.loginService.Login(username, password).subscribe(
      rez =>  {
        var toReturn = rez as loginToken
        localStorage.setItem('token', toReturn.token)
        localStorage.setItem('expiration', toReturn.expiration)
        console.log(toReturn);
        var token = localStorage.getItem('token')
        if(token) {
          window.location.href = 'http://localhost:4200/products';
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  login2() {

    /*this.loginService.Login(this.registerForm.value['username'], this.registerForm.value['password']).subscribe(
      rez =>  {
        var toReturn = rez as loginToken
        localStorage.setItem('token', toReturn.token)
        localStorage.setItem('expiration', toReturn.expiration)

        var token = localStorage.getItem('token')
        if(token){
          var decode = jwtDecode<AuthToken>(token.toString())
        
          if( decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == 'Client'){
            window.location.href = 'http://localhost:4200/client-profile';
          }
          if( decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == 'Company' ){
            window.location.href = 'http://localhost:4200/company-profile';
            
          }
        }
      },
      error => {
      }
      
    )*/
  }
}
