import {Component, OnDestroy, OnInit} from '@angular/core';
import {RoutesService} from '../../__services__/routes.service';
import {RouteModel} from '../../../shared/models/routes.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-route-requests',
  templateUrl: './route-requests.component.html',
  styleUrls: ['./route-requests.component.scss']
})
export class RouteRequestsComponent implements OnInit, OnDestroy {

  routesSubscription: Subscription;
  routes: RouteModel[] = [];

  constructor(
    public routeService: RoutesService
  ) { }

  ngOnInit() {
    this.routesSubscription = this.routeService.getAllRequests();
    this.routeService.routesRequests.subscribe((val) => {
      this.routes = val;
    });
  }

  ngOnDestroy() {
    if (this.routesSubscription) {
      this.routesSubscription.unsubscribe();
    }
  }

  capitalizeWord = (word) => {
    if (!word || typeof word !== 'string') { return word; }

    const first = word.trim().charAt(0).toUpperCase();
    return `${first}${word.slice(1)}`;
  };

  onClickRouteBox = (index, route: RouteModel) => {
    RoutesService.activeRouteIndex = index;
    RoutesService.activeRouteRequest = route;
  };

  isRouteActive(idx: number): Boolean {
    return RoutesService.activeRouteIndex === idx;
  }

  getCurrentRoute(): RouteModel {
    return RoutesService.activeRouteRequest;
  }
}
