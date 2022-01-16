import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-reposit',
  templateUrl: './reposit.component.html',
  styleUrls: ['./reposit.component.css']
})
export class RepositComponent implements OnInit {

  repo!: Repo;
  constructor( public repoService: UserServiceService ) { }

  repoSearch(searchName:any){
    this.repoService.getReopo(searchName).then(
      (results)=>{
        this.repo =this.repoService.allRepo
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.repoSearch('JosephNdegwa');
  }
}
