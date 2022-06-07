import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { IntroGuard } from './guards/intro.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canLoad:[IntroGuard,AutoLoginGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad:[AuthGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'waitlist',
    loadChildren: () => import('./pages/waitlist/waitlist.module').then( m => m.WaitlistPageModule)
  },
  {
    path: 'date-register',
    loadChildren: () => import('./pages/register/date-register/date-register.module').then( m => m.DateRegisterPageModule)
  },
  {
    path: 'date-schedule',
    loadChildren: () => import('./pages/date-schedule/date-schedule.module').then( m => m.DateSchedulePageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'my-user-quotes',
    loadChildren: () => import('./pages/my-user-quotes/my-user-quotes.module').then( m => m.MyUserQuotesPageModule)
  },
  {
    path: 'veterinarian-profile',
    loadChildren: () => import('./pages/veterinarian-profile/veterinarian-profile.module').then( m => m.VeterinarianProfilePageModule)
  },
  {
    path: 'my-veterinarian-quotes',
    loadChildren: () => import('./pages/my-veterinarian-quotes/my-veterinarian-quotes.module').then( m => m.MyVeterinarianQuotesPageModule)
  },
  {
    path: 'update-profile',
    loadChildren: () => import('./pages/update-profile/update-profile.module').then( m => m.UpdateProfilePageModule)
  },
  {
    path: 'vaccination-list',
    loadChildren: () => import('./pages/vaccination-list/vaccination-list.module').then( m => m.VaccinationListPageModule)
  },
  {
    path: 'restore-pasword',
    loadChildren: () => import('./pages/restore-pasword/restore-pasword.module').then( m => m.RestorePaswordPageModule)
  },
  {  
    path: '',
    redirectTo:'/login',
    pathMatch:'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
