import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbConfigComponent } from './db-config.component';

describe('DbConfigComponent', () => {
  let component: DbConfigComponent;
  let fixture: ComponentFixture<DbConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbConfigComponent]
    });
    fixture = TestBed.createComponent(DbConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
