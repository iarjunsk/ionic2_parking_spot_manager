import {Injectable} from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class CommonService {

  constructor(public toastCtrl: ToastController) {
    
  }

  showToast(msg : string): void{
    const toast = this.toastCtrl.create({
        message:  msg,
        duration: 2000,
        position: 'top'
    });

    toast.present();
  }

  showLoading(): void{
    // TODO
  }

  hideLoading(): void{
    //TODO
  }

}