import { AfterViewInit, Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Glassfy, GlassfyOfferings, GlassfyOffering } from 'capacitor-plugin-glassfy';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  version = '--';
  processing = false;

  constructor(public alertController: AlertController) {
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async initializeGlassfy() {
    try {
      const version = await Glassfy.sdkVersion()
      this.version = version.version;

      await Glassfy.initialize({ apiKey: "my_api_key", watcherMode: false });

      await Glassfy.setExtraUserProperty({ extra: { "key1": "value1" } });

      let extra = await Glassfy.getUserProperty();

      console.log("Extra " + extra);

    } catch (error) {
      let message = 'Unknown Error'
      if (error instanceof Error) message = error.message
      await this.presentAlert(message);

    }
  }

  async purchaseGlassfy() {
    this.processing = true
    try {

      let offerings = await Glassfy.offerings()
      offerings.all.forEach((offer: GlassfyOffering) => {
        console.log(offer);
      });

      let sku = await Glassfy.skuWithId({ identifier: "weekly_magazine_subscription" })
      console.log(sku)

      let transaction = await Glassfy.purchaseSku({ sku: sku })

      this.presentAlert(JSON.stringify(transaction))


    } catch (error) {
      let message = 'Unknown Error'
      if (error instanceof Error) message = error.message

      console.log('##############################################')
      console.log(message)
      console.log('##############################################')
      await this.presentAlert(message);
    }
    this.processing = false

  }

  ngAfterViewInit() {
    this.initializeGlassfy();
  }

}
