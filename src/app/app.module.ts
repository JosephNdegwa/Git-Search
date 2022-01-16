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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepositComponent,
    SearchFormComponent,
    NavbarComponent,
    HttpClientModule,
    AppRoutingModule,
  ],

  imports: [
    BrowserModule,
    
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
