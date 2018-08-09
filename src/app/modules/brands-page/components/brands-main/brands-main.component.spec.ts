import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsMainComponent } from './brands-main.component';

describe('BrandsMainComponent', () => {
  let component: BrandsMainComponent;
  let fixture: ComponentFixture<BrandsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
