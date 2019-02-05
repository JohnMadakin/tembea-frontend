import {Deserializable} from './deserializable.model';
import {LocationModel} from './location.model';
import {EngagementModel} from './engagement.model';
import {UsersModel} from './users.model';

export class RouteModel implements Deserializable {
  id: number | string;
  distance: number | string;
  opsComment: string;
  managerComment: string;
  engagementId: number | string;
  managerId: number | string;
  busStopId: number | string;
  homeId: number | string;
  busStopDistance: number | string;
  routeImageUrl: string;
  status: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  engagement: EngagementModel;
  manager: UsersModel;
  busStop: LocationModel;
  home: LocationModel;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.engagement = new EngagementModel().deserialize(input.engagement);
    this.manager = new UsersModel().deserialize(input.manager);
    this.busStop = new LocationModel().deserialize(input.busStop);
    this.home = new LocationModel().deserialize(input.home);
    return this;
  }
}
