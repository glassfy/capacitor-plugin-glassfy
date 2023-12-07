import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { PermissionComponent } from './pages/permission/permission.component';
import { OfferingComponent } from './pages/offering/offering.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'home/permission',
    component: PermissionComponent,
  },
  {
    path: 'home/offering',
    component: OfferingComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
