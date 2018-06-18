import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmmModelListComponent } from './smm-model-list.component';

describe('SmmModelListComponent', () => {
  let component: SmmModelListComponent;
  let fixture: ComponentFixture<SmmModelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmmModelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmmModelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
