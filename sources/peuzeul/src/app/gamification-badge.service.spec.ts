import { TestBed } from '@angular/core/testing';

import { GamificationBadgeService } from './gamification-badge.service';

describe('GamificationBadgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamificationBadgeService = TestBed.get(GamificationBadgeService);
    expect(service).toBeTruthy();
  });
});
