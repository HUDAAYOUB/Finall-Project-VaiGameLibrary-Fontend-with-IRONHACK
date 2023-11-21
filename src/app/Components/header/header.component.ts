import { Component } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  [x: string]: any|string;

  currUsername = localStorage.getItem("username");

  constructor(private router: Router, private authService: AuthService) 
  {}}
