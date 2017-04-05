import { Component } from '@angular/core';

import {NavController, IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {


  }

  fun(){
    return [1,2,'222',4]
  }


}
