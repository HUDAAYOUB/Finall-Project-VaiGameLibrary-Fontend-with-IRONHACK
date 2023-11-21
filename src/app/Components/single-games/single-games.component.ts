
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/Service/games.service';
import { GameModel } from 'src/app/Model/Model';

@Component({
  selector: 'app-single-games',
  templateUrl: './single-games.component.html',
  styleUrls: ['./single-games.component.css']
})
export class SingleGamesComponent implements OnInit {
[x: string]: any;
  id: number = 0;
  gameModel: GameModel = new GameModel({}); 

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    console.log(this.route);

    this.id = +this.route.snapshot.params['id']; // Convert to number if needed
    

    this.gamesService.getSingleGame(this.id).subscribe({
      next: (data: GameModel) => {
        console.log(data);
        this.gameModel = data;
      },
      error: (e) => {
        console.log(e);        
      }
    });
  }
}