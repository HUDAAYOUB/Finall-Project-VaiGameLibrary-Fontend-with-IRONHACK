import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-user-game',
  templateUrl: './user-game.component.html',
  styleUrls: ['./user-game.component.css']
})
export class UserGameComponent implements OnInit {
  userId!: number;
  user: any = {};
  games: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
      this.loadUserDetails();
    });
  }

  loadUserDetails(): void {
    this.userService.getUserWithGames(this.userId).subscribe((data) => {
      this.user = data.user;
      this.games = data.games;
    });
  }
}
