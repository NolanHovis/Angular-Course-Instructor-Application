import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";


@Component
({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent{
  isLoginMode = true;
  error:string = null;
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  constructor(private authService: AuthService, private router: Router){}
  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;
    if(this.isLoginMode){
      authObs = this.authService.login(email,password)
    }else{
      authObs = this.authService.signup(email,password)
    }

    authObs.subscribe(resData=>{
      console.log(resData)
      this.router.navigate(['/bookshelf'])
    }, error =>{
      console.log(error)
      this.error = "An error occured!"
      setTimeout(() => {
        this.error = null;
      }, 3000)
    })

    form.reset();
  }
}
