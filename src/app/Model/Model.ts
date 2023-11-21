
export enum GameStatus {
  NOT_STARTED,
  PLAYING,
  PLAYED
}
export class GameModel {
  private _id: number;
  private _title: string;
  private _releaseYear: number;
  private _genre: string;
  private _platform: string;
  private _description: string;
  private _imageUrl: string;
  private _rating: number;
  private _dateAdded: Date;
  private _developers: string;
  private _designer: string;
  private _mode: string;

  constructor(data: any) {
    this._id = data.id;
    this._title = data.title;
    this._releaseYear = data.releaseYear;
    this._genre = data.genre;
    this._platform = data.platform;
    this._description = data.description;
    this._imageUrl = data.imageUrl;
    this._rating = data.rating;
    this._dateAdded = new Date(data.dateAdded);
    this._developers = data.developers;
    this._designer = data.designer;
    this._mode = data.mode;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get releaseYear(): number {
    return this._releaseYear;
  }

  set releaseYear(value: number) {
    this._releaseYear = value;
  }

  get genre(): string {
    return this._genre;
  }

  set genre(value: string) {
    this._genre = value;
  }

  get platform(): string {
    return this._platform;
  }

  set platform(value: string) {
    this._platform = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }

  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }

  get dateAdded(): Date {
    return this._dateAdded;
  }

  set dateAdded(value: Date) {
    this._dateAdded = value;
  }

  get developers(): string {
    return this._developers;
  }

  set developers(value: string) {
    this._developers = value;
  }

  get designer(): string {
    return this._designer;
  }

  set designer(value: string) {
    this._designer = value;
  }

  get mode(): string {
    return this._mode;
  }

  set mode(value: string) {
    this._mode = value;
  }
}
