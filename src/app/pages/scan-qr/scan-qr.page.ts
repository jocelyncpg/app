import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage {
  scannedData: string = ''; // Inicializado a una cadena vacía

  constructor(private qrScanner: QRScanner, private platform: Platform) {}

  startScan() {
    this.platform.ready().then(() => {
      this.qrScanner.prepare().then((status: QRScannerStatus) => {
        if (status.authorized) {
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            this.scannedData = text;
            this.qrScanner.hide(); // Oculta la cámara de vista
            scanSub.unsubscribe(); // Detiene el escaneo
          });

          this.qrScanner.show(); // Muestra la vista de la cámara para escanear
        } else if (status.denied) {
          console.error('El permiso fue denegado para usar la cámara.');
        } else {
          console.error('Permiso denegado temporalmente.');
        }
      }).catch((error: any) => console.error('Error inicializando QR Scanner', error));
    });
  }
}
