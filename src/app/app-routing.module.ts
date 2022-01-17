import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositComponent } from './reposit/reposit.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'reposit', component: RepositComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
