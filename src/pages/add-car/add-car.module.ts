import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCarPage } from './add-car';

@NgModule({
  declarations: [
    AddCarPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCarPage),
  ],
})
export class AddCarPageModule {}
