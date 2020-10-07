import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import { createWorker } from 'tesseract.js';

@Component({
  selector: 'app-ocr-without-crop',
  templateUrl: './ocr-without-crop.component.html',
  styleUrls: ['./ocr-without-crop.component.scss']
})
export class OcrWithoutCropComponent implements OnInit {
  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;
  worker: Tesseract.Worker = createWorker();
  isReady: boolean;
  imageChangedEvent: any;
  base64Image: any;
  ocrResult: string;
  croppedImage: any = '';
  isScanning: boolean;

  constructor() {
    this.initialize();
  }
  initialize(): void {
    // Called as early as possible
    (async () => {
      await this.worker.load();
      await this.worker.loadLanguage('eng');
      await this.worker.initialize('eng');
      this.isReady = true;
    })();
  }
  handleFileInput(event): void {
    //  console.log(event);

    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      this.imageChangedEvent = event;

      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.base64Image = event.target.result;
      };
      reader = null;
    }
  }
  scanOCR() {
    this.isScanning = true;
    this.imageCropper.imageFile = this.croppedImage;
    this.imageCropper.crop();
    this.imageChangedEvent = null;
    this.doOCR(this.croppedImage);
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent): void {
    console.log(event);
    this.croppedImage = event.base64;
    console.log(this.imageCropper);

  }

  doOCR(base64Image: string): void {
    this.ocrResult = 'Scanning';
    console.log(`Started: ${new Date()}`);
    (async image => {
      if (this.isReady) {
        const data = await this.worker.recognize(image);
        console.log(data);
        this.ocrResult = data.data.text;
      }
      // await this.worker.terminate();
      console.log(`Stopped: ${new Date()}`);
    })(base64Image);

  }

  transform(): string {
    return this.base64Image;
  }

  ngOnInit(): void {
  }

}
