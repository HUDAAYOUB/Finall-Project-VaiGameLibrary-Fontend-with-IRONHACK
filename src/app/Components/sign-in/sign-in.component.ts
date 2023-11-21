import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  externalErrorMsg: string;

  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required]),
    });
    this.externalErrorMsg = "";
  }

  ngOnInit(): void {}

  verify(){    
    this.authService.verify(this.loginForm.value.username)
      .subscribe({
        next: (data: any) => {          
          localStorage.removeItem("userId");          
          localStorage.setItem("userId", data.id);          

          // Reset the form after successful login
          this.loginForm.reset();

          // Use Router to navigate to the home route
          this.router.navigate(["/"]).then(() => {
            // Reload the page after navigating
            window.location.reload();
          });
        },
        error: (error) => {
          console.log(error, error.status);
          if (error.status === 403) {
            this.externalErrorMsg = "Wrong username";
          }
        },
      });
  }

  login() {
    // Attempt to login
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        next: (response: { access_token: string; }) => {
          console.log("Login successful");
          console.log(response.access_token);

          // Store user in local storage to keep a user logged in between page refreshes
          localStorage.removeItem("authToken");
          localStorage.removeItem("username");
          localStorage.setItem("authToken", response.access_token);
          localStorage.setItem("username", this.loginForm.value.username);          

          this.verify();

          // Reset the form after successful login
          //this.loginForm.reset();



          // Use Router to navigate to the home route
//          this.router.navigate(["/"]).then(() => {
            // Reload the page after navigating
            //window.location.reload();
          //});
        },
        error: (error) => {
          console.log(error, error.status);
          if (error.status === 403) {
            this.externalErrorMsg = "Wrong username/password";
          }
        },
      });
  }
}
