import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSizeFormComponent } from './add-size-form.component';

describe('AddSizeFormComponent', () => {
  let component: AddSizeFormComponent;
  let fixture: ComponentFixture<AddSizeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSizeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSizeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
