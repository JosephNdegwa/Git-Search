import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositComponent } from './reposit/reposit.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'reposit', component: RepositComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
