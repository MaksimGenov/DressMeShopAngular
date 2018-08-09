import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsMainComponent } from './all-products-main.component';

describe('AllProductsMainComponent', () => {
  let component: AllProductsMainComponent;
  let fixture: ComponentFixture<AllProductsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProductsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
