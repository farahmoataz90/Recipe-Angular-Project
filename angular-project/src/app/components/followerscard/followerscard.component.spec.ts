import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerscardComponent } from './followerscard.component';

describe('FollowerscardComponent', () => {
  let component: FollowerscardComponent;
  let fixture: ComponentFixture<FollowerscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowerscardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FollowerscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
