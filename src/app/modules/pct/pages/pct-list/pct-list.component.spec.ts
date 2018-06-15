import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PctListComponent } from './pct-list.component';

describe('PctListComponent', () => {
  let component: PctListComponent;
  let fixture: ComponentFixture<PctListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PctListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
