import { TestBed } from '@angular/core/testing';

import { GetFeedbackService } from './get-feedback.service';

describe('GetFeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFeedbackService = TestBed.get(GetFeedbackService);
    expect(service).toBeTruthy();
  });
});
