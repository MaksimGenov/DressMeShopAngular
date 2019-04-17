import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizesAndQuantityComponent } from './sizes-and-quantity.component';

describe('SizesAndQuantityComponent', () => {
  let component: SizesAndQuantityComponent;
  let fixture: ComponentFixture<SizesAndQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizesAndQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizesAndQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
