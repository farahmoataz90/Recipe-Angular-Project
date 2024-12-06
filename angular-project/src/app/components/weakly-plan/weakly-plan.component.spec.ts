import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaklyPlanComponent } from './weakly-plan.component';

describe('WeaklyPlanComponent', () => {
  let component: WeaklyPlanComponent;
  let fixture: ComponentFixture<WeaklyPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaklyPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaklyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
