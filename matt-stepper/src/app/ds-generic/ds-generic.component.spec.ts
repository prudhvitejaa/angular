import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsGenericComponent } from './ds-generic.component';

describe('DsGenericComponent', () => {
  let component: DsGenericComponent;
  let fixture: ComponentFixture<DsGenericComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsGenericComponent]
    });
    fixture = TestBed.createComponent(DsGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
