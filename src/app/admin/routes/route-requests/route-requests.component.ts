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
  routesRequests: RouteModel[] = [];
  activeRouteIndex = 0;
  activeRouteRequest: RouteModel = new RouteModel();

  constructor(
    private routeService: RoutesService
  ) { }

  ngOnInit() {
    this.routesSubscription = this.routeService.getAll().subscribe(this.handleRoutes);
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
    this.activeRouteIndex = index;
    this.activeRouteRequest = route;
  };

  handleRoutes = (routesList: { routes: RouteModel[]}) => {
    this.routesRequests = routesList.routes.map(value => new RouteModel().deserialize(value));

    this.activeRouteRequest = this.routesRequests[this.activeRouteIndex] || new RouteModel();
  };
}
