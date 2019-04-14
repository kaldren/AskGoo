import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Message } from '../components/_models/message';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

  private baseApiUrl = 'https://localhost:5001/api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllConversations() {
    var accessToken = this.authService.getAccessToken();

    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken);

    return this.http.get(this.baseApiUrl + '/conversations', {headers: headers});
  }

  getConversationById(id: string) {
    var accessToken = this.authService.getAccessToken();

    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken);

    return this.http.get(this.baseApiUrl + '/conversations/' + id, {headers: headers});
  }

  createConversation(message: Message) {
    var accessToken = this.authService.getAccessToken();

    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken);

    return this.http.post(this.baseApiUrl + '/conversations/' + 'create', message, {headers: headers});
  }

}
