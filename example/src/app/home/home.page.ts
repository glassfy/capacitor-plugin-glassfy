import { AfterViewInit, Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Glassfy, GlassfyPermission, GlassfyPermissions, GlassfyOffering, GlassfyExtraProperty } from 'capacitor-plugin-glassfy';

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
      message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async initializeGlassfy() {
    try {
      const version = await Glassfy.sdkVersion();
      this.version = version.version;

      await Glassfy.initialize({ apiKey: '50af3c1afb6f473bbaf1ad0d5fb19b41', watcherMode: false });

      // set custom identifier (optional)
      await Glassfy.connectCustomSubscriber({ subscriberId: 'my_custom_identifier' });

      // set user email (optional)
      await Glassfy.setEmailUserProperty({ email: 'my@email.com' });

      const extraProp: GlassfyExtraProperty = {
        lastactivity: 'Bike',
        usage_count: '3',
      };

      await Glassfy.setExtraUserProperty({ extra: extraProp });

      //connect a paddle license key
      await Glassfy.connectPaddleLicenseKey({ licenseKey: '89bf4c748e4a45e5829e6ee6', force: true });

      // get subscriber current subscriptions
      let permissions = await Glassfy.permissions();
      console.log(JSON.stringify(permissions, null, 3));

      // fetch 'subscription_articles' offering
      let offerings = await Glassfy.offerings();
      console.log(JSON.stringify(offerings, null, 3));

      const offering = offerings.all.find(
        (o) => o.offeringId === 'subscription_articles'
      );

      const sku = offering?.skus[0];
      console.log(JSON.stringify(sku, null, 3));

      let transaction = await Glassfy.purchaseSku({ sku: sku });
      console.log(JSON.stringify(transaction, null, 3));

    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) { message = error.message; };
      await this.presentAlert(message);

    }
  }



  ngAfterViewInit() {
    this.initializeGlassfy();
  }

}
