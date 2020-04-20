import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAtmComponent } from './mobile-atm.component';

describe('MobileAtmComponent', () => {
  let component: MobileAtmComponent;
  let fixture: ComponentFixture<MobileAtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
