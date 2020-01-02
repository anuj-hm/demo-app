import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TopicService } from '../../services/topic/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})

export class TopicComponent {
  title = 'WebTopic';

  topics: any;
  topics1: any;
  topicData: any = {};
  userData: any = {};
  searchText: string;

  showTopics: Boolean = false;
  showAddTopicForm: Boolean = false;

  constructor(private http: HttpClient, private topicService: TopicService) {
    this.topicService.getAllTopics().subscribe(data => {
      this.topics = data;
      this.userData= this.topicService.getUserData();
    });
  }

  searchTopic() {
    this.topicService.searchTopic(this.searchText).subscribe(data => {
      this.topics = data;
    });
  }

  deleteTopic(id) {
    this.topicService.deleteTopic(id).subscribe(data => {
      this.topics = data;
    });
  }

  updateTopic(topicData) {
    this.topicData = topicData;
    this.showAddTopicForm = true;
    this.showTopics = false;
  }

  addNewTopic() {
    this.showAddTopicForm = true;
    this.showTopics = false;
  }

  saveTopic() {
    this.topicService.saveTopic(this.topicData).subscribe(data => {
      this.topics = data;
      this.showAddTopicForm = false;
      this.topicData = {};
      this.showTopics = true;
    });
  }

}
