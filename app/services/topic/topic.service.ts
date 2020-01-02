import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TopicService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  endpoint = 'http://localhost:8080/topics';
  endpoint1 = 'http://localhost:8080/getTopicsWithOneChildAndOneParent';
  
  userData:any;

  constructor(private http: HttpClient) {

  }

  getAllTopics(): Observable<any> {
    return this.http.get<any>(this.endpoint);
  }

  searchTopic(searchText): Observable<any> {
    return this.http.get(this.endpoint + "/" + searchText);
  }

  deleteTopic(id): Observable<any> {
    return this.http.delete(this.endpoint + "/" + id);
  }


  changeTopics1(): Observable<any> {
    return this.http.get(this.endpoint1);
  }

  saveTopic(topicData:any) {
    return this.http.post(this.endpoint, topicData);
  }

  setUserData(userData:any){
    this.userData=userData;
  }
  
  getUserData(){
    return this.userData;
  }

}