import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrecipeComponent } from './postrecipe.component';

describe('PostrecipeComponent', () => {
  let component: PostrecipeComponent;
  let fixture: ComponentFixture<PostrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostrecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
