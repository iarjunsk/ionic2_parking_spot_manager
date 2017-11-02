import {Injectable} from '@angular/core';
import {ListItem} from '../models/list_item.model'
import * as Collections from 'typescript-collections';
import {CommonService} from '../providers/common.service'

@Injectable()
export class TableService {


  private slotsList : any;
  private slotsHeap : any;
  totalSlots : number;
  colors = ['primary', 'dark', 'danger', 'secondary']; // blue, black, red, green

  constructor( public commonService : CommonService) {
    this.slotsList = new Collections.LinkedList<ListItem>();
    this.slotsHeap = new Collections.Heap<number>() ;
    this.totalSlots= 0;
  }


  randomIntFromInterval(min : number,max : number) : number{
      return Math.floor(Math.random()*(max-min+1)+min);
  }

  getRandomRegistrations(): string{
    var states = ['KA','TN','KL','AN'];
    var first = states[ this.randomIntFromInterval(0,3) ] ; // getting the state id from array

    var second = String( this.randomIntFromInterval(10,99) );

    var third = "XX"; // hardcode :P

    var fourth = String( this.randomIntFromInterval(1000,9999) );

    return first+"-"+second+"-"+third+"-"+fourth;
  }

  initalize(n : number, m : number){

    // explicitly converting any string to number
    n = +n;
    m = +m;

    if( n < m){
        this.commonService.showToast("Invalid condition");
        return ;
    }

    this.totalSlots = n;
    this.slotsList.clear();
    this.slotsHeap.clear();

    // Adding to min, heap
    while (n > 0 ) {
       this.slotsHeap.add(n);
       n--;
    }

    // Adding to list
    var slotAlloc: number;
    var randColor: string;
    var randReg : string;

    while( m > 0){
        
        slotAlloc = this.slotsHeap.removeRoot().valueOf(); // removes the top most(min) and returns it
        
        randColor = this.colors[this.randomIntFromInterval(0,3)] ; 

        randReg = this.getRandomRegistrations();

        this.slotsList.add(
            new ListItem(m,randColor,randReg) // we then inssert it into linkedlist
        );

        m--;
    }

    this.commonService.showToast("Table initialized successfully");
    
  }

  getNearestSlot() : number{
    if(this.slotsHeap.size()!=0){
      // if slots are still available
      return this.slotsHeap.peek().valueOf();
    }else{
      return -1;
    }
  }

  addToList(item : ListItem) : boolean {
    if(this.slotsHeap.size() == 0){
        this.commonService.showToast("No parking space available");
        return false;
    }
    // setting the slot no to the item, rest of attributes will be already filled
    item.setSlotNo( this.slotsHeap.removeRoot().valueOf() ); 
    this.slotsList.add( item );
    return true;
  }

  removeFromList(item : ListItem) : boolean{
    this.slotsHeap.add( item.getSlotNo() ); // re allocating the free parking lot to the heap
    return this.slotsList.remove(item); // removing the entry from the table
  }

  getList(){
    return this.slotsList.toArray(); // to Array converts LinkedList to array so that I can use ngFor
  }

}