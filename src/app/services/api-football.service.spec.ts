import { TestBed } from '@angular/core/testing';

import { ApiFootballService } from './api-football.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiFootballService', () => {
  let service: ApiFootballService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiFootballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
