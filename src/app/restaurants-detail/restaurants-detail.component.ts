import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurants/restaurant/restaurant.model';
import {ActivatedRoute} from '@angular/router'

import {RestaurantsServices} from '../restaurants/restaurants.service'

@Component({
  selector: 'mt-restaurants-detail',
  templateUrl: './restaurants-detail.component.html'
})
export class RestaurantsDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantService: RestaurantsServices, private route: ActivatedRoute) { }

  ngOnInit() {

    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }
}
 