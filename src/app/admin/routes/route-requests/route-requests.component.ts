import {Component, OnDestroy, OnInit} from '@angular/core';
import {RoutesService} from '../../__services__/routes.service';
import {RouteModel} from '../../../shared/models/routes.model';
import {Subscription} from 'rxjs';
import { AisService } from '../../__services__/ais.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-route-requests',
  templateUrl: './route-requests.component.html',
  styleUrls: ['./route-requests.component.scss']
})
export class RouteRequestsComponent implements OnInit, OnDestroy {

  routesSubscription: Subscription;
  routes: RouteModel[] = [];
  user: any;

  constructor(
    public routeService: RoutesService,
    private userData: AisService
  ) { }

  ngOnInit() {
    this.routesSubscription = this.routeService.getAllRequests();
    this.routeService.routesRequests.subscribe((val) => {
      this.routes = val;
    });
    const active = RoutesService.activeRouteRequest;
    this.getUserAvatar(active.engagement.fellow.email);
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
    this.getUserAvatar(route.engagement.fellow.email);
  };

  isRouteActive(idx: number): Boolean {
    return RoutesService.activeRouteIndex === idx;
  }

  getCurrentRoute(): RouteModel {
    return RoutesService.activeRouteRequest;
  }

  getUserAvatar(email) {
    return this.userData.getResponse(email).subscribe(user => {
      this.user = user;
      return user;
    }
  )}
}
