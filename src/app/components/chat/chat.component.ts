import { Component, OnInit } from '@angular/core';

import { ChatService } from '../../services/chat.service';
import { Chat } from './../../models/chat.model';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message:string = '';
  chats:Chat[];

  constructor(private _chatService:ChatService) { }

  ngOnInit(): void {
    this.getMessages();
  }

  sendMessage(){
    if(this.message.length === 0) return

    console.log("sendMessage: message: ",this.message);

    this._chatService.createMessage(this.message)
                      .then( () => this.message = "")
                      .catch( () => console.log("el catch"))

    console.log("enviar mensaje ",this.message);
  }

  getMessages(){
    this._chatService.getMessages().subscribe(chats => {
      this.chats = chats;
    });
    // this._chatService.getMessages().subscribe();
  }

}
