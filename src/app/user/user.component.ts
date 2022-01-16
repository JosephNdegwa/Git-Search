import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../repo';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  repo!: Repo;

  constructor( private http:HttpClient ) { }

  ngOnInit() {
    interface ApiResponse{
      author:string;
      quote:string;
    }

    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.repo = new Repo(data.author, data.quote)
    })

  }

}
