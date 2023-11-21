import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly API_URL = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {

    const token: string | null = localStorage.getItem("authToken");

    return token !== null;
  }

  login(username: string, password: string): Observable<any> {
    console.log(username, password);
    const params = { username, password };
    return this.http.get<any>(`${this.API_URL}/api/login`, { params })
      .pipe(
        catchError(error => {
          console.error('Login error:', error);
          throw error;
        })
      );
  }

  verify(username: string): Observable<any> {    
    return this.http.get<any>(`${this.API_URL}/api/users/username/${username}`)
      .pipe(
        catchError(error => {
          console.error('Login error:', error);
          throw error;
        })
      );
  }

  logout(): void {
 
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
  }
}
