import {Deserializable} from './deserializable.model';
import {UsersModel} from './users.model';
import {PartnerModel} from './partner.model';

export class EngagementModel implements Deserializable {
  id: number | string;
  partnerId: number | string;
  fellowId: number | string;
  startDate: Date | string;
  endDate: Date | string;
  workHours: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
  partner: PartnerModel;
  fellow: UsersModel;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.partner = new PartnerModel().deserialize(input.partner);
    this.fellow = new UsersModel().deserialize(input.fellow);
    return this;
  }
}
