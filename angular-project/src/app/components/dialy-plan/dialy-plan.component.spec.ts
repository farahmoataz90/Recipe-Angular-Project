import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialyPlanComponent } from './dialy-plan.component';

describe('DialyPlanComponent', () => {
  let component: DialyPlanComponent;
  let fixture: ComponentFixture<DialyPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialyPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
