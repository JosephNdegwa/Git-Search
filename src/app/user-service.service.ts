import { Injectable } from '@angular/core';
import { User } from './user';
import { Repos } from './repos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  foundUser!: User;
  allRepos : Repos=[];

  constructor(private http: HttpClient) {
    this.foundUser = new User("","","","",0,0,0,"",new Date);
    this.allRepos = new Repos;
  }

  searchUSer(searchName:string) {
   
    interface ApiResponse {
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:any;
      created_at:Date;
    }

    return new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/JosephNdegwa'+environment.apiKey).toPromise().then( 
        (result) => {
          this.foundUser = result;
          console.log(this.foundUser);
         
         // resolve()
    },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    
  }
  getReopo(searchName:string){
    interface Repo{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
    }
    return new Promise((resolve,reject)=>{
      this.http.get<Repo>('https://api.github.com/users/JosephNdegwa/repos'+environment.apiKey).toPromise().then(
       (results) => {
          this.allRepos = results;
          console.log(results)

          //resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    
  }
}
