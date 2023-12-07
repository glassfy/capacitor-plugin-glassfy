import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import {
  Glassfy,
  GlassfyOfferings,
  GlassfyPermissions,
  GlassfyStoresInfo,
  GlassfySku,
  GlassfyTransaction,
} from 'capacitor-plugin-glassfy';
import { map, switchMapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GlassfyService {
  public version$ = from(Glassfy.sdkVersion()).pipe(map(v => v.version));

  private readonly offeringsSubject$ = new BehaviorSubject<GlassfyOfferings>(
    null,
  );
  public offerings$ = this.offeringsSubject$.asObservable();

  private readonly permissionsSubject$ = new BehaviorSubject<GlassfyPermissions>(
    null,
  );
  public permissions$ = this.permissionsSubject$.asObservable();

  constructor() {
    console.log("Constructor");
    from(
      Glassfy.initialize({
        apiKey: '50af3c1afb6f473bbaf1ad0d5fb19b41',
        watcherMode: false,
      }),
    ).subscribe({
      next: () => {
          this.loadPermissions();
          this.loadOfferings();
      },
      error: e => {
        console.error('Got Error!');
      },
    });
  }

  public loadPermissions(): Observable<GlassfyPermissions> {
    Glassfy.permissions().then(p => this.permissionsSubject$.next(p));
    return this.permissions$;
  }

  public loadOfferings(): Observable<GlassfyPermissions> {
    Glassfy.offerings().then(p => this.offeringsSubject$.next(p));
    return this.permissions$;
  }

  public purchaseSku(sku: GlassfySku): Observable<GlassfyTransaction> {
    return from(Glassfy.purchaseSku({ sku }));
  }
}
