import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteRequestsComponent } from './route-requests.component';

describe('RouteRequestsComponent', () => {
  let component: RouteRequestsComponent;
  let fixture: ComponentFixture<RouteRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
