import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PctFormComponent } from './pct-form.component';

describe('PctFormComponent', () => {
  let component: PctFormComponent;
  let fixture: ComponentFixture<PctFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PctFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PctFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
