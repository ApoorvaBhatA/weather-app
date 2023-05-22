import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  var originalTimeout;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommonService],
    });
    service = TestBed.inject(CommonService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 2147483647;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getCitiesData should return value from observable', (done: DoneFn) => {
    service.getCitiesData().subscribe((value) => {
      expect(value).toBe([
        {
          id: 16,
          city: 'Surat',
          country: 'India',
          temperature: 32,
          weather: 'Partly Cloudy',
          humidity: 65,
          wind_speed: 11,
          pressure: 1014,
        },
      ]);
      done();
    });
  });

  it('#getSelectedCitiesData should return value from observable', (done: DoneFn) => {
    service.getCitiesData().subscribe((value) => {
      expect(value).toBe([
        {
          id: 16,
          city: 'Surat',
          country: 'India',
          temperature: 32,
          weather: 'Partly Cloudy',
          humidity: 65,
          wind_speed: 11,
          pressure: 1014,
        },
      ]);
      done();
    });
  });

  it('#postSelectedCityData should return value from observable', (done: DoneFn) => {
    service.getCitiesData().subscribe((value) => {
      // expect(value).toBe();
      // done();
    });
  });
});
