/* Filter and search through the data */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {TableService} from '../../providers/table.service'

@IonicPage()
@Component({
  selector: 'page-view-data',
  templateUrl: 'view-data.html'
})
export class ViewDataPage {
  items : any;
  color : string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tableService: TableService
             ) {
    this.color = "nil";
    this.initializeList();
  }

  initializeList(): void{
    this.items = this.tableService.getList();
  }

  // Filter part
  applyColorFilter(): void{
    // TODO : fails when we search and then select blue
    this.initializeList();

    if(this.color != "nil"){
      this.items =  this.items.filter((item) => {
          return (item.getColor() === this.color);
      });
    }

  }

 // Search part
  getItems(ev){

    this.applyColorFilter();

    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
          return (item.getRegistration().toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
