import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrWithCroppedImageComponent } from './ocr-with-cropped-image.component';

describe('OcrWithCroppedImageComponent', () => {
  let component: OcrWithCroppedImageComponent;
  let fixture: ComponentFixture<OcrWithCroppedImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcrWithCroppedImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrWithCroppedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
