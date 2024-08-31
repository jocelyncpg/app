import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage {
  constructor(
    private qrScanner: QRScanner,
    private platform: Platform,
    private alertCtrl: AlertController
  ) {}

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.startScan();
    });
  }

  async startScan() {
    try {
      const status: QRScannerStatus = await this.qrScanner.prepare();

      if (status.authorized) {
        const scanSub = this.qrScanner.scan().subscribe(async (text: string) => {
          console.log('Scanned result:', text);
          this.showAlert('Scanned result', text);

          this.qrScanner.hide(); // Hide camera preview
          scanSub.unsubscribe(); // Stop scanning
        });

        this.qrScanner.show(); // Show camera preview

      } else if (status.denied) {
        this.showAlert('Error', 'Camera permission permanently denied. Please enable it in settings.');
        this.qrScanner.openSettings();
      } else {
        this.showAlert('Error', 'Camera permission denied temporarily. Please try again later.');
      }
    } catch (e) {
      console.error('Error preparing camera:', e);
      this.showAlert('Error', 'An issue occurred while preparing the camera.');
    }
  }

  ionViewWillLeave() {
    this.qrScanner.hide(); // Hide camera preview when leaving page
    this.qrScanner.destroy(); // Destroy scanner instance
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
