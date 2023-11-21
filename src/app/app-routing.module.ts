import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { GamesComponent } from './Components/games/games.component';
import { ErorComponent } from './Components/eror/eror.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SingleGamesComponent } from './Components/single-games/single-games.component';
import { UserComponent } from './Components/user/user.component';
import { SearchComponent } from './Components/search/search.component';
import { CreatGameComponent } from './Components/creat-game/creat-game.component';
import { UserGameComponent } from './Components/user-game/user-game.component';
import { NewuserComponent } from './Components/newuser/newuser.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { AuthGuardService } from './Service/auth-guard-service.service';
import { AddGameComponent } from './Components/add-game/add-game.component';

const routes: Routes = [
  { 
    path: '',
     component: HomeComponent
     },
  { 
    path: 'games',
     component: GamesComponent
     },
  { 
    path: 'create-game'
    , component: CreatGameComponent
   },
  {
     path: 'user/:id',
      component: ProfileComponent 
    },
  {
     path: 'game/:id',
      component: SingleGamesComponent
     },
  {
     path: 'user',
      component: UserComponent
     },
     { 
      path: 'add-game',
      component: AddGameComponent 
    },

  { 
    path: 'profile/:userId',
    canActivate: [AuthGuardService],
     component: ProfileComponent
     },
     {
      path: 'profile/:userId/:games/:id',
      component:ProfileComponent

     },
   
    {
      path: 'search',
     component: SearchComponent
     },
  { 
    path: 'user/:id/games',
     component: UserGameComponent 
    },

    {
      path: 'Register',
      component: NewuserComponent
    },
   
    { 
      path: 'add-game',
     component: AddGameComponent
     },
     {
       path: 'signin', 
       component: SignInComponent
      },
  { 
    path: '**',
     component: ErorComponent
     },
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
