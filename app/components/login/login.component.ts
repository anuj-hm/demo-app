import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { TopicService } from 'src/app/services/topic/topic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  title = 'WebLogin';
  
  showLinks: Boolean = false;
  showLoginForm: Boolean = true;
  loginData: any = {};
  userData: any;
  
  endpoint = 'http://localhost:8080/login';

  constructor(private http: HttpClient, private router: Router, private topicService:TopicService) {
    this.userData= JSON.parse(window.localStorage.getItem('userData'));
    console.log(this.userData);
    if(this.userData==null){
      this.showLinks=true;
      this.topicService.setUserData(this.userData)  ;
    }
  }

  getLogin() {
    this.http.post(this.endpoint, this.loginData).subscribe(data => {
      this.showLinks = true;
      this.loginData = {};
      this.userData = data;
      this.topicService.setUserData(data);
      window.localStorage.setItem('userData',  JSON.stringify(this.userData));
      this.router.navigate(['home']);     
    });
  }

  logout(){
    this.showLinks = false;
    this.showLoginForm = true;

    window.localStorage.removeItem('userData');
    this.userData = {};
  }
}
