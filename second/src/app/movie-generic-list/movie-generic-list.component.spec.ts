import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenericListComponent } from './movie-generic-list.component';

describe('MovieGenericListComponent', () => {
  let component: MovieGenericListComponent;
  let fixture: ComponentFixture<MovieGenericListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieGenericListComponent]
    });
    fixture = TestBed.createComponent(MovieGenericListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
