/* The auto fill screen */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TableService} from '../../providers/table.service'

@IonicPage()
@Component({
  selector: 'page-generate-data',
  templateUrl: 'generate-data.html',
})
export class GenerateDataPage {

  n : number; // no of parking slots
  m : number; // no of cars already filled
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private tableService: TableService
             ) {
  }

  generateData(){
    this.tableService.initalize(this.n, this.m);
  }

}
