import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelConfigListComponent } from './channel-config-list.component';

describe('ChannelConfigListComponent', () => {
  let component: ChannelConfigListComponent;
  let fixture: ComponentFixture<ChannelConfigListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelConfigListComponent]
    });
    fixture = TestBed.createComponent(ChannelConfigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
