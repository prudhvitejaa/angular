import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudConfigComponent } from './cloud-config.component';

describe('CloudConfigComponent', () => {
  let component: CloudConfigComponent;
  let fixture: ComponentFixture<CloudConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudConfigComponent]
    });
    fixture = TestBed.createComponent(CloudConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
