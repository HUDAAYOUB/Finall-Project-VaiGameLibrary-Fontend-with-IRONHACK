import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErorComponent } from './Components/eror/eror.component';
import { GamesComponent } from './Components/games/games.component';
import { SingleGamesComponent } from './Components/single-games/single-games.component';
import { SearchComponent } from './Components/search/search.component';
import { UserComponent } from './Components/user/user.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CreatGameComponent } from './Components/creat-game/creat-game.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { UserGameComponent } from './Components/user-game/user-game.component';
import { CommonModule } from '@angular/common';
import { NewuserComponent } from './Components/newuser/newuser.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './Components/sign-in/sign-in.component'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddGameComponent } from './Components/add-game/add-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatGameComponent,
    ErorComponent,
    GamesComponent,
    SingleGamesComponent,
    SearchComponent,
    UserComponent,
    ProfileComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    UserGameComponent,
    UserComponent,
    NewuserComponent,
    AddGameComponent,
     SignInComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatSliderModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    MatButtonModule,
    MatStepperModule,
    MatSnackBarModule,

  ],
  
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
