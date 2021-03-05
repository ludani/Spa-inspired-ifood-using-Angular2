import {Injectable} from '@angular/core'
import {Restaurant} from './restaurants/restaurant/restaurant.model'
import {MEAT_API} from '../app.api'
import {Http} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import {ErrorHandler} from '../app.error-handler'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

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
}