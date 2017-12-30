import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toUser : {toUserId: string, toUserName: string};

  constructor() {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Hancock'
    }
  }


}
