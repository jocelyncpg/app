import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageModule } from './pages/login/login.module';
import { ResetPasswordPageModule } from './pages/reset-password/reset-password.module';
import { AttendancePageModule } from './pages/attendance/attendance.module';
import { ScanQrPageModule } from './pages/scan-qr/scan-qr.module';
import { ExtraPageModule } from './pages/extra/extra.module';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { FooterModule } from './footer/footer.module';
import { QRScanner } from '@ionic-native/qr-scanner/ngx'; // Importa el QRScanner

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    LoginPageModule,
    ResetPasswordPageModule,
    AttendancePageModule,
    ScanQrPageModule,
    ExtraPageModule,
    FormsModule,
    FooterModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    QRScanner // Agrega QRScanner aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
