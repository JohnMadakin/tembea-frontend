import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { RouteRequestsComponent } from './route-requests.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {AngularMaterialModule} from '../../../angular-material.module';
import {RoutesService} from '../../__services__/routes.service';
import getAllResponseMock from './__mocks__/get-all-response.mock';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';
import {EmptyPageComponent} from '../../empty-page/empty-page.component';

describe('RouteRequestsComponent', () => {
  let component: RouteRequestsComponent;
  let fixture: ComponentFixture<RouteRequestsComponent>;
  let httpMock: HttpTestingController;
  let service: RoutesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteRequestsComponent, EmptyPageComponent ],
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule,
        AngularMaterialModule
      ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(RouteRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(inject([RoutesService, HttpTestingController], (_service, _httpMock) => {
    service = _service;
    httpMock = _httpMock;
  }));

  it('should create RouteRequestsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Render Route Boxes: should render 3 route boxes with the first one active', () => {
    const request = httpMock.expectOne(`${service.baseUrl}/requests`);
    expect(request.request.method).toEqual('GET');
    request.flush(getAllResponseMock);

    fixture.detectChanges();
    const boxes = fixture.debugElement.queryAll(By.css('.route-box'));

    expect(boxes.length).toEqual(3);
    expect(Object.keys(boxes[0].properties)).toContain('className');
    expect(boxes[0].properties.className).toContain('active');

    expect(Object.keys(boxes[1].properties)).toContain('className');
    expect(boxes[1].properties.className).not.toContain('active')
  });

  it('onClickRouteBox(): should call onCLickRouterBox', () => {
    const request = httpMock.expectOne(`${service.baseUrl}/requests`);
    expect(request.request.method).toEqual('GET');
    request.flush(getAllResponseMock);
    fixture.detectChanges();

    const boxes = fixture.debugElement.queryAll(By.css('.route-box'));
    expect(boxes.length).toEqual(3);
    const secondBox = boxes[1];

    jest.spyOn(component, 'onClickRouteBox');

    expect(component.onClickRouteBox).not.toHaveBeenCalled();

    secondBox.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.onClickRouteBox).toHaveBeenCalledWith(1, getAllResponseMock.routes[1]);

    expect(Object.keys(boxes[1].properties)).toContain('className');
    expect(boxes[1].properties.className).toContain('active')
  });
});
