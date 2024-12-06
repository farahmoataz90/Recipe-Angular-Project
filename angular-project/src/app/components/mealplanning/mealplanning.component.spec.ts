import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealplanningComponent } from './mealplanning.component';

describe('MealplanningComponent', () => {
  let component: MealplanningComponent;
  let fixture: ComponentFixture<MealplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealplanningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
