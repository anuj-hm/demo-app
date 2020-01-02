import { RouterModule, Routes } from '@angular/router';
import {TopicComponent} from "./components/topic/topic.component";
import {UserComponent} from "./components/user/user.component";
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'topic', component: TopicComponent },
  { path : 'user', component : UserComponent},
  { path : 'home', component : HomeComponent}
];

export const routing = RouterModule.forRoot(routes);