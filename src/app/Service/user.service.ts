import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/Modeluser';
import { GameModel, GameStatus } from '../Model/Model';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  [x: string]: any;
  private readonly APIURL = 'http://localhost:8080/api/users';  

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.APIURL);
  }

  getSingleUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.APIURL}/${id}`);
  }

  postUser(body: any): Observable<any> {
    return this.http.post<any>(this.APIURL, body);
  }

  putUser(id: string, body: any): Observable<any> {
    return this.http.put<any>(`${this.APIURL}/${id}`, body);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.APIURL}/${id}`);
  }

signIn(credentials: { username: string; password: string }): Observable<any> {
  return this.http.post(this['signinUrl'], credentials);
}


getUserProfile(userId: number): Observable<User> {
  return this.http.get<User>(`${this.APIURL}/${userId}`);
}
addGameToUserProfile(userId: number, gameData: any[]): Observable<any> {
  const url = `${this.APIURL}/${userId}/add-game`;
  return this.http.post(url, gameData);  
}





deleteGame(userId: number, gameId: number): Observable<any> {
  const url = `${this.APIURL}/${userId}/games/${gameId}`;
  return this.http.delete(url);
}
postUserGame(userId: number, gameId: number, userRating: number, userOpinion: string, status: string): Observable<any> {
  const body = { userId, gameId, userRating, userOpinion, status };
  return this.http.post<any>(`${this.APIURL}/${userId}/games/${gameId}?userOpinion=${userOpinion}&userRating=${userRating}&status=${status}`, body);
}


getUserWithGames(userId: number): Observable<any> {
  return this.http.get(`${this.APIURL}/${userId}`);
}

addGameToUser(userId: string, gameId: number, userRating: number, userOpinion: string, status: string): Observable<any> {
  if(status == "0") status = "NOT_STARTED";
  else if(status == "1") status = "PLAYING";
  else if(status == "2") status = "PLAYED";

  const url = `${this.APIURL}/${userId}/addgame/${gameId}?userOpinion=${userOpinion}&userRating=${userRating}&status=${status}`;
  const body = { userRating, userOpinion, status };
  return this.http.post(url, body);
}

updateGame(userId: number, gameId: number, userRating: number, userOpinion: string, status: string): Observable<any> {
  const body = { userRating, userOpinion, status };
  const url = `${this.APIURL}/${userId}/games/${gameId}`;
  return this.http.put<any>(url, body);
}


}