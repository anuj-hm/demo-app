import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  title = 'WebUser';
 
  endpoint = 'http://localhost:8080/users';

  showUsers: Boolean = true;
  showAddUserForm: Boolean = false;

  users: any;
  userData: any={};
  constructor(private http: HttpClient) {
    this.http.get(this.endpoint).subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id) {
    this.http.delete(this.endpoint+ "/" + id).subscribe(data => {
      this.users = data;
    });
  }

  updateUser(userData) {
    this.userData = userData;
    this.showAddUserForm = true;
    this.showUsers = false;
  }

  getAddUserForm() {
    this.showUsers = false;
    this.showAddUserForm = true;
  }

  saveUser() {
    this.http.post(this.endpoint, this.userData).subscribe(data => {
      this.showAddUserForm = false;
      this.userData = {};
      this.users = data;
      this.showUsers = true;
    });
  }

}
