import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private isShowing: boolean = false;

  constructor(private toastController: ToastController) { }

  async present(message: string, duration: number = 3000) {
    let toast = await this.toastController.create({
      message: message, duration: duration
    });

    await toast.present();

    return toast;
  }
}
