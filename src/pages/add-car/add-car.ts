/* Extra screen -- To create a new entry in the parking lot table */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {TableService} from '../../providers/table.service'
import {CommonService} from '../../providers/common.service'

// Using List item model { slotNumber, color, RegistrationNumber }
import {ListItem} from '../../models/list_item.model'

@IonicPage()
@Component({
  selector: 'page-add-car',
  templateUrl: 'add-car.html' // no need to declare the provider here ~ again
})
export class AddCarPage {
  slot : number; // best slot found from the min heap
  color : string; // color recieved from the select box
  registration: string; // the registration number ~ undergoes regex check
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private tableService : TableService,
              private commonService : CommonService
             ) {
        this.color = "primary"; // setting default color
  }

  ionViewDidLoad() {
    // getting the best parking slot  ~ if all are filled, then provider returns -1
    this.slot = this.tableService.getNearestSlot().valueOf();
    if(this.slot == -1 ){ 
      this.commonService.showToast("All the slots are full");
      this.goBack();
    }
  }

  addCarToTable(): void {

    // Checking if the Registration number is correct or not
    var regex = new RegExp('^[A-Z]{2}-[0-9]{2}-[A-Z]{2}-[0-9]{4}$');
    if( regex.test(this.registration) ){
      this.tableService.addToList( new ListItem(this.slot , this.color, this.registration) );
      this.commonService.showToast("Car added");
      this.goBack(); // come back to manipulation page
    }else{
      this.commonService.showToast("Registration number is not proper");
    }

  }

  goBack() {
      this.navCtrl.pop();
  }

}
