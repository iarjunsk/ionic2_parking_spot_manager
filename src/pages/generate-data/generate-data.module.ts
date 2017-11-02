import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerateDataPage } from './generate-data';

@NgModule({
  declarations: [
    GenerateDataPage,
  ],
  imports: [
    IonicPageModule.forChild(GenerateDataPage),
  ],
})
export class GenerateDataPageModule {}
