import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  myUser!: User;

  constructor(private http:HttpClient) {
    this.myUser = new User("","","","",0,0,0,"",new Date);
    
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
        this.myUser.url = response.url
        this.myUser.login = response.login
        this.myUser.html_url = response.html_url
        this.myUser.location = response.location
        this.myUser.public_repos = response.public_repos
        this.myUser.followers = response.followers
        this.myUser.following = response.following
        this.myUser.avatar_url = response.avatar_url
        this.myUser.created_at = response.created_at


         //resolve()
       },
       error=>{
         this.myUser.url = "Please wait for network"
         

         reject(error)
       })
     })
     return promise
   }
}
