//This file contains the unit tests for the surveydata service. Created by default when creating a new service

import { TestBed } from '@angular/core/testing';
import { SurveydataService } from './surveydata.service';

describe('SurveydataService', () => {
  let service: SurveydataService;

  beforeEach(() => {
    // Set up a testing module with the SurveydataService
    TestBed.configureTestingModule({});
    // Inject the SurveydataService into the test
    service = TestBed.inject(SurveydataService);
  });

  it('should be created', () => {
    // Test whether the service is created successfully
    expect(service).toBeTruthy();
  });
});
