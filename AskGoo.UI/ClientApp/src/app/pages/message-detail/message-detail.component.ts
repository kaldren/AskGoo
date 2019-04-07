import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ConversationsService } from 'src/app/_services/conversations.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {

  conversation: any;
  conversationId = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private conversationsService: ConversationsService) { }

    ngOnInit() {
      console.log(this.conversationId);
      this.getConversationById();
    }

    getConversationById() {
      this.conversationsService.getConversationById(this.conversationId)
        .subscribe((data) => {
          this.conversation = data;
          console.log(data);
        });
      }
}
