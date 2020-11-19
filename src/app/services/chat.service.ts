import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Chat } from './../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatsCollection: AngularFirestoreCollection<Chat>;
  chats: Observable<Chat[]>;

  constructor(private _firestore: AngularFirestore) { }

  getMessages(){
    this.chatsCollection = this._firestore.collection<Chat>('chats');
    return this.chatsCollection.snapshotChanges().pipe(
      map( res => res.map( chat => {
        const data = chat.payload.doc.data();
        const id = chat.payload.doc.id;
        
        return {id, ...data};
      }))
    )
  }

  createMessage( message: string){
    // TODO falta el uid del usuario
    let chat:Chat = {
      name: 'Aaroncin',
      message: message,
      date: new Date().getTime()
    }


    return this._firestore.collection('chats').add(chat);

  }
}
