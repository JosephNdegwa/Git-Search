import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  foundUser!: User;
  allRepo!: Repo;

  constructor(private http: HttpClient) {
    this.foundUser = new User("","","","",0,0,0,"",new Date);
    //this.allRepo = new Repo("","","",new Date,0,0,"");
  }

  searchUSer(searchName: string) {
   
    interface Responce {
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

    return new Promise((resolve, reject) => {
      this.http.get<Responce>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then(
        (result) => {
          this.foundUser = result;
          console.log(this.foundUser);
         // resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  getReopo(searchName:any){
    interface Repos{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
    }
    return new Promise((resolve,reject)=>{
      this.http.get<Repos>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
        (results) => {
          //this.allRepo = results;
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
