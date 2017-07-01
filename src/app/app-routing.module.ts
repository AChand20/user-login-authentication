import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
export const routes: Routes = [
    { path: '', loadChildren: 'app/home/home.module#HomeComponent', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: 'app/login/login.module#LoginComponent'}, 
    { path: 'register', loadChildren: 'app/register/register.module#RegisterComponent'},

    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}