import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgWithSpinnerComponent } from './img-with-spinner.component';

describe('ImgWithSpinnerComponent', () => {
  let component: ImgWithSpinnerComponent;
  let fixture: ComponentFixture<ImgWithSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgWithSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgWithSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
