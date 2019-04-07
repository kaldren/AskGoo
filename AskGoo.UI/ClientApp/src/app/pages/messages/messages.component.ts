import { Component, OnInit } from '@angular/core';
import { ConversationsService } from 'src/app/_services/conversations.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private conversationsService: ConversationsService) {
    this.getAllConversations();
  }

  allConversations: any;

  ngOnInit() {
  }

  getAllConversations() {
    this.conversationsService.getAllConversations()
      .subscribe((data) => {
        this.allConversations = data;
        console.log(data);
      });
  }
}
