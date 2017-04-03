/**
 * Created by hsuanlee on 2017/4/4.
 */
import { NgModule } from '@angular/core';
import { TabsPage} from './tabs';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [TabsPage],
    imports: [IonicPageModule.forChild(TabsPage)],
})
export class TabsPageModule { }