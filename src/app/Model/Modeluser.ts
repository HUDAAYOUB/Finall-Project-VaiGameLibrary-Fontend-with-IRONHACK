export class User {
  private _id: number;
  private _username: string;
  private _email: string;
  private _password: string;
  private _userRating: number;
  private _userOpinion: string = '';
  private _status: string;
  selectedStatus: string = 'NOT_STARTED';
  selectedRating: number = 0;
  private _userGames: any[] = []; 
userGame: any;
name: any;

  constructor(id: number, username: string, email: string, password: string) {
    this._id = id;
    this._username = username;
    this._email = email;
    this._password = password;
    this._userRating = 0;
    this._userOpinion = "";
    this._status = "";
    this._userGames = [];
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get userRating(): number {
    return this._userRating;
  }

  set userRating(value: number) {
    this._userRating = value;
  }

  get userOpinion(): string {
    return this._userOpinion;
  }

  set userOpinion(value: string) {
    this._userOpinion = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get userGames(): any[] {
    return this._userGames;
  }

  set userGames(value: any[]) {
    this._userGames = value;
  }
}
