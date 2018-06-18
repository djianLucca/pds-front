import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmmModelFormComponent } from './smm-model-form.component';

describe('SmmModelFormComponent', () => {
  let component: SmmModelFormComponent;
  let fixture: ComponentFixture<SmmModelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmmModelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmmModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
