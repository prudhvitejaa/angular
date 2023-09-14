import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsJoinComponent } from './ds-join.component';

describe('DsJoinComponent', () => {
  let component: DsJoinComponent;
  let fixture: ComponentFixture<DsJoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsJoinComponent]
    });
    fixture = TestBed.createComponent(DsJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
