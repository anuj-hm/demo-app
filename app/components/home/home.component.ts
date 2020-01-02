import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TopicService } from 'src/app/services/topic/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'WebHome';
  
  showLinks: Boolean = false;
  showLoginForm: Boolean = true;
  showUserData: Boolean = false;

  loginData: any = {};
  userData: any;

  constructor(private http: HttpClient, private topicService:TopicService) {
    this.userData=this.topicService.getUserData();
  }

}
