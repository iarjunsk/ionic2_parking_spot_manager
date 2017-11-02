import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {TableService} from '../../providers/table.service'
import {ListItem} from '../../models/list_item.model'
import {AddCarPage} from '../add-car/add-car'


@IonicPage()
@Component({
  selector: 'page-manipulate-data',
  templateUrl: 'manipulate-data.html',
})
export class ManipulateDataPage {
  
  addItem : ListItem;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              private  tableService : TableService
            ) {
  }

  addCar(): void{
    this.navCtrl.push(AddCarPage);
  }

  delete(item : ListItem) : void{
    this.tableService.removeFromList(item);
  }

}
