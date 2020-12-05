import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }
  
  public doRegistration(user){

    return this.http.post("http://localhost:8080/save-user", user , {responseType:"text" as "json"});

  }
}
