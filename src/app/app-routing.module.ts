import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/LogIn', pathMatch: 'full' },
  { path: 'LogIn', loadChildren: () =>import("./log-in/log-in.module").then(m => m.LogInModule)},
  { path: 'profile/:index',loadChildren: () =>import("./profile/profile.module").then(m => m.ProfileModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }