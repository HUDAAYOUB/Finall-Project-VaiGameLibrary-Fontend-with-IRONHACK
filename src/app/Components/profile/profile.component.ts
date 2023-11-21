import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/Modeluser';
import { UserService } from 'src/app/Service/user.service';
import { ActivatedRoute } from '@angular/router';
import { GameModel, GameStatus } from 'src/app/Model/Model';
import { GamesService } from 'src/app/Service/games.service';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  userId: number = 0;
  user: User = new User(0, '', '', '');
  availableGames: GameModel[] = [];
  selectedGame: GameModel | null = null;
  userOpinion: string = '';
  selectedRating: number = 0.0;
  selectedStatus: string = '';
  errorMessage: string = '';
  gameStatusOptions: GameStatus[] = [GameStatus.NOT_STARTED, GameStatus.PLAYING, GameStatus.PLAYED];
  userRating: any;
  status: any;
  userGameService: any;

  currUsername = localStorage.getItem("username");
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private gamesService: GamesService,
    private authService: AuthService)
   {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.params['userId'];
    this.loadProfileAndGames();
  }

  loadProfileAndGames(): void {
    this.loadGames();
    this.loadProfile();
  }

  loadGames(): void {
    this.gamesService.getGames().subscribe({
      next: (data: GameModel[]) => {
        this.availableGames = data;
        console.log('Available Games:', this.availableGames);
      },
      error: (e) => console.log(e),
    });
  }

  loadProfile(): void {
    this.userService.getUserProfile(this.userId).subscribe({
      next: (data: User) => {
        this.user = data;
        console.log('User Profile:', this.user);
      },
      error: (e) => console.log(e),
    });
  }

  addGameToUser(): void {
    if (this.selectedGame) {
      const userGame = {
        game: this.selectedGame,
        userOpinion: this.userOpinion,
        userRating: this.selectedRating,
        status: this.selectedStatus,
      };

      this.userService.addGameToUser(
        this.userId.toString(),
        this.selectedGame.id,
        this.selectedRating, 
        this.userOpinion,
        this.selectedStatus
      ).subscribe({
        next: (response: any) => {
          console.log('Game added successfully:', response);

          this.availableGames = this.availableGames.filter(game => game.id !== this.selectedGame!.id);

          this.loadProfileAndGames();
          this.resetForm();
        },
        error: (error: any) => {
          console.error('Error adding game:', error);
          this.errorMessage = 'Failed to add the game. Please try again.';
        },
      });
    }
  }

  resetForm(): void {
    this.selectedGame = null;
    this.userOpinion = '';
    this.selectedRating = 0.0;
    this.selectedStatus = '';
    this.errorMessage = '';
  }

  cancelUpdate(userGame: any): void {
    userGame.editMode = false;
  }
  
 
  
  getStatusText(status: GameStatus): string {
    switch (status) {
      case GameStatus.NOT_STARTED:
        return 'Not Started';
      case GameStatus.PLAYING:
        return 'Playing';
      case GameStatus.PLAYED:
        return 'Played';
      default:
        return 'Unknown';
    }
  }

  deleteGame(gameId: number): void {
    if (confirm("Do you want to delete this game?")) {
      this.userService.deleteGame(this.userId, gameId).subscribe({
        next: () => {
          console.log('Game deleted successfully');
          this.loadProfileAndGames();
        },
        error: (error: any) => {
          console.error('Error deleting game:', error);
          this.errorMessage = 'Failed to delete the game. Please try again.';
        },
      });
    }
  }  

  updateGameDetails(userGame: any): void {
    console.log('Updating game details:', userGame);
   
  
    this.userService.updateGame(this.userId, userGame.game.id, userGame.editUserRating, userGame.editUserOpinion, userGame.editStatus)
      .subscribe({
        next: (response: any) => {
          // console.log('Game updated successfully:', response);
          // this.loadProfileAndGames();
          
        userGame.editMode = false; 
        userGame.editUserRating = null;
        userGame.editUserOpinion = '';
        userGame.editStatus = '';
        console.log('Game updated successfully:', response);
        this.loadProfileAndGames();
        
        this.errorMessage = ''; 
        
        },
        
        error: (error: any) => {
          console.error('Error updating game:', error);
          this.errorMessage = 'Failed to update the game. Please try again.';
        },
      });
  }
  
  }
  

  
