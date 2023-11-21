import { Component } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/Modeluser';
import { UserService } from 'src/app/Service/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  [x: string]: any|string;
  users: User[] = [];
  currUsername = localStorage.getItem("username");
  currUserId = localStorage.getItem("userId");

  constructor(private router: Router, private authService: AuthService,private userService: UserService,) 
  {}

  ngOnInit(): void {
    // Fetch the list of users
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
        console.log(this.users);
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  // Navigate to the profile page with the selected user's ID
  navigateToProfile(userId: number): void {
    this.router.navigate(['/profile', userId]);
  }}

