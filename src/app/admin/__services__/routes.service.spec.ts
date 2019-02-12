import {inject, TestBed} from '@angular/core/testing';

import { RoutesService } from './routes.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import getAllResponseMock from '../routes/route-requests/__mocks__/get-all-response.mock';

describe('RoutesService', () => {
  let service: RoutesService;
  let httpMock: HttpTestingController;
  let routes = [];

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [RoutesService]
  }));

  beforeEach(inject([RoutesService, HttpTestingController], (_service, _httpMock) => {
    service = _service;
    httpMock = _httpMock;
    service.routesRequests.subscribe(value => {
      routes = value;
    });
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllRequests(): should return all pending routes', (done) => {
    expect(routes.length).toBe(0);
    service.getAllRequests();

    const request = httpMock.expectOne(`${service.baseUrl}/requests`);
    expect(request.request.method).toEqual('GET');

    request.flush(getAllResponseMock);

    expect(routes.length).toBe(3);
    done();
  });
});
