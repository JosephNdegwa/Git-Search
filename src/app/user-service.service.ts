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

  constructor() { }
}
