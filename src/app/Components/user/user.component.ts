// user.component.ts
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/Modeluser';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

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
  }
}