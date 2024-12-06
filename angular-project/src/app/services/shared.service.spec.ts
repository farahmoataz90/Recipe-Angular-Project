import { TestBed } from '@angular/core/testing';

// import { SharedService } from './shared.service';
import { ShoppingService } from './shared.service';

describe('SharedService', () => {
  let service: ShoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
