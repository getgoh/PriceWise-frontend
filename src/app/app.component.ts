import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, ZXingScannerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'pricewise';
  barcodeValue = 'Initial value';
  cameraEnabled: boolean = true;
  toggleCameraButtonText = 'Enable camera';

  // this allows all formats from the BarcodeFormat enum
  allowedFormats = [ BarcodeFormat.AZTEC, BarcodeFormat.QR_CODE, BarcodeFormat.CODABAR, BarcodeFormat.CODE_128, BarcodeFormat.CODE_39, BarcodeFormat.CODE_93, BarcodeFormat.DATA_MATRIX, BarcodeFormat.EAN_13, BarcodeFormat.EAN_8, BarcodeFormat.ITF, BarcodeFormat.MAXICODE, BarcodeFormat.PDF_417, BarcodeFormat.RSS_14, BarcodeFormat.RSS_EXPANDED, BarcodeFormat.UPC_A, BarcodeFormat.UPC_E, BarcodeFormat.UPC_EAN_EXTENSION ];

  scanSuccessHandler(successString: string) {
    this.barcodeValue = successString;
  }

  toggleCamera() {
    this.cameraEnabled = this.cameraEnabled == false ? true : false;
    this.toggleCameraButtonText = this.cameraEnabled == true ? 'Disable camera' : 'Enable camera';
  }

}
