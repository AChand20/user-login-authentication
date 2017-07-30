import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
export const routes: Routes = [
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule'}, 
    { path: 'register', loadChildren: 'app/register/register.module#RegisterModule'},

    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
