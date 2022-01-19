import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { Repos } from './repos';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  user!: User;
  repo!: Repos;

  constructor(private http:HttpClient) {
    this.user = new User("","","","",0,0,0,"",new Date);
    this.repo = new Repos("","","",0,0,"",new Date);
  }

   reposRequest(){
     interface ApiResponse{
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>('https://api.github.com/users/JosephNdegwa'+environment.apiKey).toPromise().then(response=>{
        this.user.url = response.url
        this.user.login = response.login
        this.user.html_url = response.html_url
        this.user.location = response.location
        this.user.public_repos = response.public_repos
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.avatar_url = response.avatar_url
        this.user.created_at = response.created_at


         //resolve()
       },
       error=>{
         this.user.url = "Please wait for network"
         

         reject(error)
       })
     })
     return promise
    }

   repositRequest() {
     return this.http.get('https://api.github.com/users/JosephNdegwa/repos'+environment.apiKey)
      .map(result=>result)
      
   }
     
   

}
