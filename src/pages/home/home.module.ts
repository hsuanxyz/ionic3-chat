/**
 * Created by hsuanlee on 2017/4/4.
 */
import { NgModule} from '@angular/core';
import { HomePage} from './home';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [HomePage],
    imports: [
        IonicPageModule.forChild(HomePage),

    ],
})
export class HomePageModule { }