import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositComponent } from './reposit/reposit.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { DatePipePipe } from './date-pipe.pipe';
import { UserServiceService } from './user-service.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HighlightDirective } from './highlight.directive';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { RepoRequestService } from './repo-request.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepositComponent,
    SearchFormComponent,
    NavbarComponent,
    DatePipePipe,
    NotFoundComponent,
    HighlightDirective,
   
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],

  providers: [UserServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
