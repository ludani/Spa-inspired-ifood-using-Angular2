import {Routes} from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AboutComponent } from 'app/about/about.component';

// CRIANDO ROTAS
export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path:'about', component: AboutComponent},
]