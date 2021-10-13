import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtimeComponent } from './formtime.component';

describe('FormtimeComponent', () => {
  let component: FormtimeComponent;
  let fixture: ComponentFixture<FormtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
