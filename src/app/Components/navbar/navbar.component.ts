import { Component } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
[x: string]: any|string;

  currUsername = localStorage.getItem("username");

  constructor(private router: Router, private authService: AuthService) 
  {

}


logout(): void {
  // Log out
  this.authService.logout();
  // Redirect to login page
  this.router.navigate(["/signin"]);
  window.location.reload();
}}
