import {async, ComponentFixture, fakeAsync, flush, TestBed} from '@angular/core/testing';

import { RouteRequestsComponent } from './route-requests.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AngularMaterialModule} from '../../../angular-material.module';
import {RoutesService} from '../../__services__/routes.service';
import {of} from 'rxjs';
import getAllResponseMock from './__mocks__/get-all-response.mock';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';
import {EmptyPageComponent} from '../../empty-page/empty-page.component';

describe('RouteRequestsComponent', () => {
  let component: RouteRequestsComponent;
  let fixture: ComponentFixture<RouteRequestsComponent>;

  const MockRouteService = {
    getAll: () => of(getAllResponseMock)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteRequestsComponent, EmptyPageComponent ],
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule,
        AngularMaterialModule
      ],
      providers: [{ provide: RoutesService, useValue: MockRouteService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create RouteRequestsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('handleRoutes(): getAll(): should fetch all routes', fakeAsync(() => {
    const service: RoutesService = TestBed.get(RoutesService);
    component.routesRequests = [];

    const spy = jest.spyOn(service, 'getAll');
    jest.spyOn(component, 'handleRoutes');

    expect(component.routesRequests.length).toEqual(0);
    component.ngOnInit();
    flush();

    expect(spy).toHaveBeenCalled();
    expect(component.handleRoutes).toHaveBeenCalled();
    expect(component.routesRequests.length).toEqual(3);
  }));

  it('Render Route Boxes: should render 3 route boxes with the first one active', () => {
    const boxes = fixture.debugElement.queryAll(By.css('.route-box'));

    expect(boxes.length).toEqual(3);
    expect(Object.keys(boxes[0].properties)).toContain('className');
    expect(boxes[0].properties.className).toContain('active');

    expect(Object.keys(boxes[1].properties)).toContain('className');
    expect(boxes[1].properties.className).not.toContain('active')
  });

  it('onClickRouteBox(): should call onCLickRouterBox', () => {
    const boxes = fixture.debugElement.queryAll(By.css('.route-box'));
    expect(boxes.length).toEqual(3);
    const secondBox = boxes[1];

    jest.spyOn(component, 'onClickRouteBox');

    expect(component.onClickRouteBox).not.toHaveBeenCalled();

    secondBox.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.onClickRouteBox).toHaveBeenCalledWith(1, getAllResponseMock.routes[1]);

    expect(component.activeRouteIndex).toEqual(1);
    expect(Object.keys(boxes[1].properties)).toContain('className');
    expect(boxes[1].properties.className).toContain('active')
  });

});
