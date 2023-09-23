import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3ConfigComponent } from './s3-config.component';

describe('S3ConfigComponent', () => {
  let component: S3ConfigComponent;
  let fixture: ComponentFixture<S3ConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [S3ConfigComponent]
    });
    fixture = TestBed.createComponent(S3ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
