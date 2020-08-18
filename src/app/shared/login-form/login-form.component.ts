import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpLoginService } from 'src/app/services/http-login.service';
import { AuthenticationService } from 'src/app/services/authentication.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() error: string | null;
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private httpLogin: HttpLoginService,
    private authentication: AuthenticationService
       
  ) { 
    
    this.loginForm = this.formBuilder.group({
      type:['', Validators.required], 
      user:['', Validators.required],
      password:['', Validators.required]   
     });
  }

  ngOnInit(): void {
  }

 
  ClickVerificationLogin(){

    this.httpLogin.loginVerification(this.loginForm.value)
    .subscribe(data =>{
      if (data == null){       
        error => console.log(error)
        this.error = "Wrong username or password."
      }
      else{
        console.log(data.user);
        this.authentication.setToken(data.user);
        this.router.navigate(['']);
      }
    },
    );
  }
  PageRegister(){
    this.router.navigate(['/register']);

  }

}
