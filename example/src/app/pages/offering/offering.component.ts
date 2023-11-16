import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlassfyService } from 'src/app/services/glassfy.service';
import { GlassfyOffering, GlassfySku } from '../../../../../dist/esm';
import { ToastController } from '@ionic/angular';
import { error } from 'protractor';

@Component({
  selector: 'app-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.scss'],
})
export class OfferingComponent implements OnInit {
  level = 1;

  offering$: Observable<GlassfyOffering>

  constructor(
    private route: ActivatedRoute,
    private toastController: ToastController,
    private glassfy: GlassfyService) { }

  ngOnInit() {
    const offeringId = this.route.snapshot.paramMap.get('id');
    this.offering$ = this.glassfy.offerings$.pipe(
      map((permissions) => { return permissions.all.find((p) => p.offeringId == offeringId) })
    );
  }

  purchaseSku(sku: GlassfySku) {
    this.glassfy.purchaseSku(sku).subscribe({
      next: (t) => {
        this.toastController.create({
          message: "Success",
          duration: 1500,
          position: 'bottom',
        }).then((t) => t.present());
      },
      error: (e) => {
        this.toastController.create({
          message: e,
          duration: 1500,
          position: 'bottom',
        }).then((t) => t.present());
      }
    })
  }
}
