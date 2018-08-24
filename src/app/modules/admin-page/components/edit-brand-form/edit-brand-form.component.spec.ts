import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBrandFormComponent } from './edit-brand-form.component';

describe('EditBrandFormComponent', () => {
  let component: EditBrandFormComponent;
  let fixture: ComponentFixture<EditBrandFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBrandFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBrandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
