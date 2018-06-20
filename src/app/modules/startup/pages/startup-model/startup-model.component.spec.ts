import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupModelComponent } from './startup-model.component';

describe('StartupModelComponent', () => {
  let component: StartupModelComponent;
  let fixture: ComponentFixture<StartupModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
