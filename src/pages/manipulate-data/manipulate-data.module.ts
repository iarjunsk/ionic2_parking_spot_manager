import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManipulateDataPage } from './manipulate-data';

@NgModule({
  declarations: [
    ManipulateDataPage,
  ],
  imports: [
    IonicPageModule.forChild(ManipulateDataPage),
  ],
})
export class ManipulateDataPageModule {}
