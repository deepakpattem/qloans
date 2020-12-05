import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User("","","","","");
  message : any ;
  constructor(private service : UserServiceService) { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  public registerNow(){
    let response=this.service.doRegistration(this.user);
      response.subscribe(data=>{
        this.message=data;
        console.log(this.message);
      });
  }

}
