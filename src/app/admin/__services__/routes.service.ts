import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subscription} from 'rxjs';
import {RouteModel} from '../../shared/models/routes.model';
import {environment} from '../../../environments/environment';
import {retry} from 'rxjs/operators';
import 'rxjs-compat/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  static activeRouteRequest: RouteModel = new RouteModel();
  static activeRouteIndex = 0;
  baseUrl = `${environment.tembeaBackEndUrl}/api/v1/routes`;

  private routesRequestSubject: BehaviorSubject<RouteModel[]> = new BehaviorSubject([]);
  routesRequests = this.routesRequestSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAllRequests(): Subscription {
    return this.http.get<{ routes: RouteModel[] }>(`${this.baseUrl}/requests`)
      .pipe(
        retry(3)
      ).map(this.handleRoutesRequests)
      .subscribe();
  }

  private handleRoutesRequests = (routesList: { routes: Array<any> }): RouteModel[] => {
    const routesRequests = routesList.routes.map(value => new RouteModel().deserialize(value));
    RoutesService.activeRouteRequest = routesRequests[RoutesService.activeRouteIndex] || new RouteModel();

    this.routesRequestSubject.next(routesRequests);
    return routesRequests;
  };
}
