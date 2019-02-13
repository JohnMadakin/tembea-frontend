import {inject, TestBed} from '@angular/core/testing';

import { AisService } from './ais.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import AISUserMock from '../../__mocks__/AISUser.mock';

describe('AisService', () => {
  let service: AisService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    return TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [AisService]
    });
  });

  beforeEach(inject([AisService, HttpTestingController], (_service, _httpMock) => {
    service = _service;
    httpMock = _httpMock;
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getResponse(): should return all pending routes', (done) => {
    service.getResponse('test.user@test.com').subscribe(value => {
      userData = value;
      console.log(value);
    });

    const request = httpMock.expectOne(`${service.baseUrl}`);
    expect(request.request.method).toEqual('GET');
    request.flush(AISUserMock);

    expect(userData.first_name).toBe('Test');
    done();
});
});

