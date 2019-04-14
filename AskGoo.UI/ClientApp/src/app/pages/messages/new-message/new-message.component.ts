import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/components/_models/message';
import { ConversationsService } from 'src/app/_services/conversations.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  message: Message = {
    recipient: '',
    content: ''
  };

  formSubmitted = false;

  constructor(private conversationsService: ConversationsService) { }

  ngOnInit() {
  }

  onFormSubmit() {
    this.formSubmitted = true;
    console.log(JSON.stringify(this.message));
    this.conversationsService.createConversation(this.message).subscribe(data => {
      console.log(data);
    });
  }
}
