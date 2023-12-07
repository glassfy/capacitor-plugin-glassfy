import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {
  GLASSFY_STORE,
} from 'capacitor-plugin-glassfy';
import { GlassfyService } from '../../services/glassfy.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  level = 0;

  constructor(
    public alertController: AlertController,
    private router: Router,
    public glassfy: GlassfyService,
  ) {
  }

  openPermission(permId: string) {
    this.router.navigate(['/home', 'permission', { id: permId }]);
  }

  openOffering(offId: string) {
    this.router.navigate(['/home', 'offering', { id: offId }]);
  }
}
