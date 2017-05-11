import { Component } from '@angular/core';

/**
 * Generated class for the EmojiPickerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'emoji-picker',
  templateUrl:'./emoji-picker.html'
})
export class EmojiPickerComponent {

  text: string;

  constructor() {
    console.log('Hello EmojiPickerComponent Component');
    this.text = 'Hello World';
  }

}
