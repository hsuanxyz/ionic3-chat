import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatService, ChatMessage} from "../../providers/chat-service";

import { Events, Content } from 'ionic-angular';

/**
 * Generated class for the Chat page.
 *
 * See http://ionicframework.com/docs/v2/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class Chat {

  @ViewChild(Content) content: Content;

  msgList: ChatMessage[] = [];
  userId: string = '140000198202211138';
  userName: string = 'Luff';
  userImgUrl: string = './assets/user.jpg';
  toUserId: string = '210000198410281948';
  editorMsg: string = '';
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public chatService: ChatService,
      public events: Events
  ) {
  }

  ionViewDidLoad() {
    this.content.enableScrollListener();
    this.events.subscribe('chat:received',(msg,time) => {
      this.pushNewMsg(msg)
    })
  }

  ionViewWillEnter(){
    this.getMsg()
        .then( () => {
          this.scrollToBottom()
        });
  }

  getMsg(){
    return this.chatService
        .getMsgList()
        .then( res => {
          this.msgList = res;
          console.log(this.msgList)
        })
        .catch(err => {
          console.log(err)
        })
  }

  sendMsg(){
    const id = Date.now().toString();
    let newMsg: ChatMessage = {
      messageId: Date.now().toString(),
      userId:this.userId,
      userName:this.userName,
      userImgUrl:this.userImgUrl,
      toUserId:this.toUserId,
      time:Date.now(),
      message:this.editorMsg,
      status:'pending'
    };
    this.pushNewMsg(newMsg);
    this.editorMsg = '';
    this.chatService.sendMsg(newMsg)
        .then( () => {
          let index = this.getMsgIndexById(id);
          if(index !== -1){
            this.msgList[index].status = 'success';
          }
        })
  }

  getMsgIndexById(id:string){
    return this.msgList.findIndex( e => e.messageId === id)
  }

  pushNewMsg(msg: ChatMessage) :string{
    if(msg.userId === this.userId &&  msg.toUserId === this.toUserId){
      this.msgList.push(msg);
    }else if (msg.toUserId === this.userId && msg.userId === this.toUserId){
      this.msgList.push(msg);
    }
    this.scrollToBottom();
    return msg.messageId
  }

  scrollToBottom() {
    setTimeout(() => {
      if(this.content.scrollToBottom){
        this.content.scrollToBottom();
      }
    },100)
  }
}
