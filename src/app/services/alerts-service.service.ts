import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsServiceService {

  constructor(public toastController: ToastController,public loadingController: LoadingController) { }
  loading:any
  async  presentToast(mensaje : string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
  async openLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
    });
    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  async closeLoading() {
     await this.loading.dismiss();
     await this.loading.onDidDismiss();  
    }
}
