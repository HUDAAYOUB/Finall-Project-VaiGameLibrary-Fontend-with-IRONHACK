// games.component.ts

import { Component, OnInit } from '@angular/core';
import { GameModel } from 'src/app/Model/Model';
import { GamesService } from 'src/app/Service/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: GameModel[] = [];
  searchTerm: string = '';
  filteredGames: GameModel[] = [];
  p: number = 1;
  itemsPerPage: number = 3;

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService.getGames().subscribe({
      next: (data: GameModel[]) => {
        this.games = data;
        this.filteredGames = [...this.games]; // Copy games to filteredGames initially
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  applyFilter(): void {
    // Apply the filter based on the searchTerm
    this.filteredGames = this.games.filter(game =>
      game.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.p = 1; // Reset page to 1 when filtering
  }

  clearFilter(): void {
    // Clear the search term and reset the filteredGames to all games
    this.searchTerm = '';
    this.filteredGames = [...this.games];
    this.p = 1; // Reset page to 1 when clearing filter
  }

  get visibleGames(): GameModel[] {
    const startIndex = (this.p - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredGames.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredGames.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.p < this.totalPages) {
      this.p++;
    }
  }

  prevPage() {
    if (this.p > 1) {
      this.p--;
    }
  }
}
