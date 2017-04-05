import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chat } from './chat';
import {ChatService} from "../../providers/chat-service";

@NgModule({
  declarations: [
    Chat,
  ],
  imports: [
    IonicPageModule.forChild(Chat),
  ],
  exports: [
    Chat
  ],
  providers:[
    ChatService
  ]
})
export class ChatModule {}
