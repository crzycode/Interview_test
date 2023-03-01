import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarticalBarComponent } from './vartical-bar.component';

describe('VarticalBarComponent', () => {
  let component: VarticalBarComponent;
  let fixture: ComponentFixture<VarticalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarticalBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarticalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
