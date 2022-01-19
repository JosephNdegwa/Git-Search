import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';
import { UserServiceService } from '../user-service.service';
import { RepoRequestService } from '../repo-request.service';

@Component({
  selector: 'app-reposit',
  templateUrl: './reposit.component.html',
  styleUrls: ['./reposit.component.css']
})
export class RepositComponent implements OnInit {

  repo: any=[];
  constructor( public repoService: UserServiceService, private repositService:RepoRequestService ) { }

  repoSearch(searchName:string){
  this.repoService.getReopo(searchName).then(
    (success)=>{
      this.repo =this.repoService.allRepos
      console.log(this.repo);
    },
  
    (error)=>{
      console.log(error);
    }
  );
  }

  ngOnInit() {
    //this.repoSearch();

    this.repositService.repositRequest().subscribe(repos => {
      this.repo = repos as string[]
    console.log(repos)
      })
    
  }
}
