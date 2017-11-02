import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

/* All the pages */
import { GenerateDataPage } from '../pages/generate-data/generate-data';
import { ManipulateDataPage } from '../pages/manipulate-data/manipulate-data';
import { ViewDataPage } from '../pages/view-data/view-data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = GenerateDataPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // Setting the side menu data
    this.pages = [
      { title: 'Generate Data', component: GenerateDataPage },
      { title: 'Manipulate Data', component: ManipulateDataPage },
      { title: 'View Data', component: ViewDataPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
