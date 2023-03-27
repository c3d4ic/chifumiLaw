import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'waiting-room',
    loadChildren: () => import('./waiting-room/waiting-room.module').then( m => m.WaitingRoomPageModule)
  },
  {
    path: 'board',
    loadChildren: () => import('./board/board.module').then( m => m.BoardPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'game-detail',
    loadChildren: () => import('./game-detail/game-detail.module').then( m => m.GameDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
