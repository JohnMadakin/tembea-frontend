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
    // this.routesRequests = routesList.routes.map(value => new RouteModel().deserialize(value));

    this.routesRequests = [
      {
        'id': 2,
        'distance': null,
        'opsComment': null,
        'managerComment': null,
        'engagementId': 1,
        'managerId': 1,
        'busStopId': 1,
        'homeId': 1,
        'busStopDistance': null,
        'routeImageUrl': null,
        'status': 'Pending',
        'createdAt': '2019-02-06T15:09:21.991Z',
        'updatedAt': '2019-02-06T15:09:21.991Z',
        'manager': {
          'id': 1,
          'name': 'New Name',
          'slackId': 'XXXXXXXXX',
          'phoneNo': '2349782037189',
          'email': 'me.you@test.com',
          'defaultDestinationId': null,
          'createdAt': '2018-11-14T00:00:00.000Z',
          'updatedAt': '2019-02-06T15:09:04.311Z'
        },
        'busStop': {
          'id': 1,
          'locationId': 1,
          'address': 'the dojo',
          'createdAt': '2018-11-14T00:00:00.000Z',
          'updatedAt': '2018-11-14T00:00:00.000Z'
        },
        'home': {
          'id': 1,
          'locationId': 1,
          'address': 'the dojo',
          'createdAt': '2018-11-14T00:00:00.000Z',
          'updatedAt': '2018-11-14T00:00:00.000Z'
        },
        'engagement': {
          'id': 1,
          'partnerId': 1,
          'fellowId': 1,
          'startDate': '2019-01-22',
          'endDate': '2019-05-22',
          'workHours': '13:00-22:00',
          'createdAt': '2019-01-22T00:00:00.000Z',
          'updatedAt': '2019-01-22T00:00:00.000Z',
          'partner': {
            'id': 1,
            'name': 'Partner Inc. NYC',
            'createdAt': '2019-01-22T00:00:00.000Z',
            'updatedAt': '2019-01-22T00:00:00.000Z'
          },
          'fellow': {
            'id': 1,
            'name': 'New Name',
            'slackId': 'XXXXXXXXX',
            'phoneNo': '2349782037189',
            'email': 'me.you@test.com',
            'defaultDestinationId': null,
            'createdAt': '2018-11-14T00:00:00.000Z',
            'updatedAt': '2019-02-06T15:09:04.311Z'
          }
        }
      },
      {
        'id': 2,
        'distance': null,
        'opsComment': null,
        'managerComment': null,
        'engagementId': 1,
        'managerId': 1,
        'busStopId': 1,
        'homeId': 1,
        'busStopDistance': null,
        'routeImageUrl': null,
        'status': 'Pending',
        'createdAt': '2019-02-06T15:09:21.991Z',
        'updatedAt': '2019-02-06T15:09:21.991Z',
        'manager': {
          'id': 1,
          'name': 'New Name',
          'slackId': 'XXXXXXXXX',
          'phoneNo': '2349782037189',
          'email': 'me.you@test.com',
          'defaultDestinationId': null,
          'createdAt': '2018-11-14T00:00:00.000Z',
          'updatedAt': '2019-02-06T15:09:04.311Z'
        },
        'busStop': {
          'id': 1,
          'locationId': 1,
          'address': 'the dojo',
          'createdAt': '2018-11-14T00:00:00.000Z',
          'updatedAt': '2018-11-14T00:00:00.000Z'
        },
        'home': {
          'id': 1,
          'locationId': 1,
          'address': 'the dojo',
          'createdAt': '2018-11-14T00:00:00.000Z',
          'updatedAt': '2018-11-14T00:00:00.000Z'
        },
        'engagement': {
          'id': 1,
          'partnerId': 1,
          'fellowId': 1,
          'startDate': '2019-01-22',
          'endDate': '2019-05-22',
          'workHours': '13:00-22:00',
          'createdAt': '2019-01-22T00:00:00.000Z',
          'updatedAt': '2019-01-22T00:00:00.000Z',
          'partner': {
            'id': 1,
            'name': 'Partner Inc. NYC',
            'createdAt': '2019-01-22T00:00:00.000Z',
            'updatedAt': '2019-01-22T00:00:00.000Z'
          },
          'fellow': {
            'id': 1,
            'name': 'New Name',
            'slackId': 'XXXXXXXXX',
            'phoneNo': '2349782037189',
            'email': 'me.you@test.com',
            'defaultDestinationId': null,
            'createdAt': '2018-11-14T00:00:00.000Z',
            'updatedAt': '2019-02-06T15:09:04.311Z'
          }
        }
      },
      {
        'id': 2,
        'distance': null,
        'opsComment': null,
        'managerComment': null,
        'engagementId': 1,
        'managerId': 1,
        'busStopId': 1,
        'homeId': 1,
        'busStopDistance': null,
        'routeImageUrl': null,
        'status': 'Pending',
        'createdAt': '2019-02-06T15:09:21.991Z',
        'updatedAt': '2019-02-06T15:09:21.991Z',
        'manager': {
          'id': 1,
          'name': 'New Name',
          'slackId': 'XXXXXXXXX',
          'phoneNo': '2349782037189',
          'email': 'me.you@test.com',
          'defaultDestinationId': null,
          'createdAt': '2018-11-14T00:00:00.000Z',
          'updatedAt': '2019-02-06T15:09:04.311Z'
        },
        'busStop': {
          'id': 1,
          'locationId': 1,
          'address': 'the dojo',
          'createdAt': '2018-11-14T00:00:00.000Z',
          'updatedAt': '2018-11-14T00:00:00.000Z'
        },
        'home': {
          'id': 1,
          'locationId': 1,
          'address': 'the dojo',
          'createdAt': '2018-11-14T00:00:00.000Z',
          'updatedAt': '2018-11-14T00:00:00.000Z'
        },
        'engagement': {
          'id': 1,
          'partnerId': 1,
          'fellowId': 1,
          'startDate': '2019-01-22',
          'endDate': '2019-05-22',
          'workHours': '13:00-22:00',
          'createdAt': '2019-01-22T00:00:00.000Z',
          'updatedAt': '2019-01-22T00:00:00.000Z',
          'partner': {
            'id': 1,
            'name': 'Partner Inc. NYC',
            'createdAt': '2019-01-22T00:00:00.000Z',
            'updatedAt': '2019-01-22T00:00:00.000Z'
          },
          'fellow': {
            'id': 1,
            'name': 'New Name',
            'slackId': 'XXXXXXXXX',
            'phoneNo': '2349782037189',
            'email': 'me.you@test.com',
            'defaultDestinationId': null,
            'createdAt': '2018-11-14T00:00:00.000Z',
            'updatedAt': '2019-02-06T15:09:04.311Z'
          }
        }
      },
      {
        'id': 2,
        'distance': null,
        'opsComment': null,
        'managerComment': null,
        'engagementId': 1,
        'managerId': 1,
        'busStopId': 1,
        'homeId': 1,
        'busStopDistance': null,
        'routeImageUrl': null,
        'status': 'Pending',
        'createdAt': '2019-02-06T15:09:21.991Z',
        'updatedAt': '2019-02-06T15:09:21.991Z',
        'manager': {
          'id': 1,
          'name': 'New Name',
          'slackId': 'XXXXXXXXX',
          'phoneNo': '2349782037189',
          'email': 'me.you@test.com',
          'defaultDestinationId': null,
          'createdAt': '2018-11-14T00:00:00.000Z',
          'updatedAt': '2019-02-06T15:09:04.311Z'
        },
        'busStop': {
          'id': 1,
          'locationId': 1,
          'address': 'the dojo',
          'createdAt': '2018-11-14T00:00:00.000Z',
          'updatedAt': '2018-11-14T00:00:00.000Z'
        },
        'home': {
          'id': 1,
          'locationId': 1,
          'address': 'the dojo',
          'createdAt': '2018-11-14T00:00:00.000Z',
          'updatedAt': '2018-11-14T00:00:00.000Z'
        },
        'engagement': {
          'id': 1,
          'partnerId': 1,
          'fellowId': 1,
          'startDate': '2019-01-22',
          'endDate': '2019-05-22',
          'workHours': '13:00-22:00',
          'createdAt': '2019-01-22T00:00:00.000Z',
          'updatedAt': '2019-01-22T00:00:00.000Z',
          'partner': {
            'id': 1,
            'name': 'Partner Inc. NYC',
            'createdAt': '2019-01-22T00:00:00.000Z',
            'updatedAt': '2019-01-22T00:00:00.000Z'
          },
          'fellow': {
            'id': 1,
            'name': 'New Name',
            'slackId': 'XXXXXXXXX',
            'phoneNo': '2349782037189',
            'email': 'me.you@test.com',
            'defaultDestinationId': null,
            'createdAt': '2018-11-14T00:00:00.000Z',
            'updatedAt': '2019-02-06T15:09:04.311Z'
          }
        }
      }
    ];

    this.activeRouteRequest = this.routesRequests[this.activeRouteIndex] || new RouteModel();
  };
}
