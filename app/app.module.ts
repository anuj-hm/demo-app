import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TopicComponent } from './components/topic/topic.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';

import { TopicService } from './services/topic/topic.service';
import { routing} from './app.routing';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    TopicComponent,
	UserComponent,
  HomeComponent,
  LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
  ],
  providers: [TopicService],
  bootstrap: [LoginComponent]
})
export class AppModule { }
