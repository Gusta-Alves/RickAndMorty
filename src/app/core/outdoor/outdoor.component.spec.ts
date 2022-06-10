import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorComponent } from './outdoor.component';

describe('OutdoorComponent', () => {
  let component: OutdoorComponent;
  let fixture: ComponentFixture<OutdoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutdoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
