import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/* Services ie Providers : Declaring in the root so that, data is preserved in all the pages */
import {TableService} from '../providers/table.service'
import {CommonService} from '../providers/common.service'

// All the app pages
import { GenerateDataPage } from '../pages/generate-data/generate-data';
import { ManipulateDataPage } from '../pages/manipulate-data/manipulate-data';
import { ViewDataPage } from '../pages/view-data/view-data';
import { AddCarPage } from '../pages/add-car/add-car';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp, // Add page details
    GenerateDataPage,
    ManipulateDataPage,
    ViewDataPage,
    AddCarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,// Add page details
    GenerateDataPage,
    ManipulateDataPage,
    ViewDataPage,
    AddCarPage
  ],
  providers: [ // Add service details
    TableService,
    CommonService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
