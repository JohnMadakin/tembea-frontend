import { Component } from '@angular/core';
import {TripItineraryComponent} from '../trip-itinerary/trip-itinerary.component';

@Component({
  selector: 'app-past-trips',
  templateUrl: './past-trips.component.html',
  styleUrls: [
    '../../routes/routes-inventory/routes-inventory.component.scss',
    '../../trips/trip-itinerary/trip-itinerary.component.scss'
  ],
})
export class PastTripsComponent extends TripItineraryComponent {
  tripType = 'Regular Trip';
  status = 'Completed';
}
