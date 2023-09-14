import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelConfigFormComponent } from './channel-config-form.component';

describe('ChannelConfigFormComponent', () => {
  let component: ChannelConfigFormComponent;
  let fixture: ComponentFixture<ChannelConfigFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelConfigFormComponent]
    });
    fixture = TestBed.createComponent(ChannelConfigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
