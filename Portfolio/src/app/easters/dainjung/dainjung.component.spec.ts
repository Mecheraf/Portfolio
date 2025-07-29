import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DainjungComponent } from './dainjung.component';

describe('DainjungComponent', () => {
  let component: DainjungComponent;
  let fixture: ComponentFixture<DainjungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DainjungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DainjungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
