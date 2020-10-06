import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrWithoutCropComponent } from './ocr-without-crop.component';

describe('OcrWithoutCropComponent', () => {
  let component: OcrWithoutCropComponent;
  let fixture: ComponentFixture<OcrWithoutCropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcrWithoutCropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrWithoutCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
