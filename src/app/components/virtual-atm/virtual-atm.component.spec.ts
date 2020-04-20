import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualAtmComponent } from './virtual-atm.component';

describe('VirtualAtmComponent', () => {
  let component: VirtualAtmComponent;
  let fixture: ComponentFixture<VirtualAtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualAtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
