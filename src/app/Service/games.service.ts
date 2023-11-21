
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GameModel } from '../Model/Model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  searchGames(query: any): any {
    throw new Error('Method not implemented.');
  }

  private readonly API_URL = 'http://localhost:8080/api/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<GameModel[]> {
    return this.http.get<GameModel[]>(this.API_URL);
  }

  getGamesByUser(userId: number): Observable<GameModel[]> {
    return this.http.get<GameModel[]>(this.API_URL + '/' + userId);
  }

  getSingleGame(id: number): Observable<GameModel> {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<GameModel>(url);
  }

}
