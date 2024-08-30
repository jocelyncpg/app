import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./pages/attendance/attendance.module').then(m => m.AttendancePageModule)
  },
  {
    path: 'scan-qr',
    loadChildren: () => import('./pages/scan-qr/scan-qr.module').then(m => m.ScanQrPageModule)
  },
  {
    path: 'extra',
    loadChildren: () => import('./pages/extra/extra.module').then(m => m.ExtraPageModule)
  },
  {
    path: 'view-attendance',
    loadChildren: () => import('./pages/view-attendance/view-attendance.module').then( m => m.ViewAttendancePageModule)
  },
  
    {
      path: 'view-attendance',
      loadChildren: () => import('./pages/view-attendance/view-attendance.module').then(m => m.ViewAttendancePageModule)
    }

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
})
export class AppRoutingModule {}
