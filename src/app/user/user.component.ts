import {Component, OnInit} from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { Repos } from '../repos';
import { RepoRequestService } from '../repo-request.service';


@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user!: User;
repo: any=[];
 
  constructor(public myService: UserServiceService, public repotService: UserServiceService, private repoService: RepoRequestService, private repositService:RepoRequestService) {
    
  }

  searchs(searchName:string){
    this.myService.searchUSer(searchName).then(
      (success)=>{
        this.user = this.myService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
    
    
    this.repotService.getReopo(searchName).then(
      (success)=>{
        this.repo =this.repotService.allRepos
        console.log(this.repo);
      },
    
      (error)=>{
        console.log(error);
      }
    );
  }
    
     
  

  ngOnInit() {
    this.searchs('JosephNdegwa');

    this.repoService.reposRequest()
    this.user = this.repoService.user

    this.repositService.repositRequest().subscribe(repos => {
    this.repo = this.repositService.repo
    })
  }
}
 

