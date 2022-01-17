import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  user!: User;

  constructor(private http:HttpClient) {
    this.user = new User("","","","",0,0,0,"",new Date);
    
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
       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
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
}
