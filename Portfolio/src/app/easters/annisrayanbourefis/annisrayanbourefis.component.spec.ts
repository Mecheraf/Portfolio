import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnisrayanbourefisComponent } from './annisrayanbourefis.component';

describe('AnnisrayanbourefisComponent', () => {
  let component: AnnisrayanbourefisComponent;
  let fixture: ComponentFixture<AnnisrayanbourefisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnisrayanbourefisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnisrayanbourefisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
