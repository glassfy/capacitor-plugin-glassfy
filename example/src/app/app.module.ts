import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './pages/home/home.page';
import { OfferingComponent } from './pages/offering/offering.component';
import { PermissionComponent } from './pages/permission/permission.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    PermissionComponent,
    OfferingComponent,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
