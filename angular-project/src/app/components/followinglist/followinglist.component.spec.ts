import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowinglistComponent } from './followinglist.component';

describe('FollowinglistComponent', () => {
  let component: FollowinglistComponent;
  let fixture: ComponentFixture<FollowinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowinglistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FollowinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
