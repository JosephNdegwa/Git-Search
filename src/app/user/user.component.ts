import {Component, OnInit} from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { Repo } from '../repo';
import { RepoRequestService } from '../repo-request.service';
@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user!: User;
repo!: any;

  constructor(public myService: UserServiceService, private repoService: RepoRequestService) {
  }

  searchs(searchName:any) {
    this.myService.searchUSer(searchName).then(
      (success)=>{
        this.user = this.myService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
     
  }

  ngOnInit() {
    //this.searchs('JosephNdegwa');
    this.repoService.reposRequest()
    this.user = this.repoService.user
  }
}
