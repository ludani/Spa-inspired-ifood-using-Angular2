import {Injectable} from '@angular/core'
import {Restaurant} from './restaurants/restaurant/restaurant.model'
import {MEAT_API} from '../app.api'
import {Http} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import {ErrorHandler} from '../app.error-handler'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { MenuItem } from 'app/restaurants-detail/menu-item/menu-item.model'

// Se foi importar o http precisa colocar esse injectable
@Injectable()
export class RestaurantsServices {

    constructor(private http: Http) {}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}