import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chat } from './chat';
import {ChatService} from "../../providers/chat-service";
import {RelativeTime} from "../../pipes/relative-time";

@NgModule({
  declarations: [
    Chat,
    RelativeTime
  ],
  imports: [
    IonicPageModule.forChild(Chat),
  ],
  exports: [
    Chat
  ],
  providers:[
    ChatService,
  ]
})
export class ChatModule {}
