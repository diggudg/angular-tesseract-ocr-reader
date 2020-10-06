import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OcrWithCroppedImageComponent } from './ocr-with-cropped-image/ocr-with-cropped-image.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'ocr-with-cropped-image', component: OcrWithCroppedImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
