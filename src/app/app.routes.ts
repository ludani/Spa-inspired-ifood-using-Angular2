import {Routes} from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

// CRIANDO ROTAS
export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path:'restaurants/:id', component: RestaurantsDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch:'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent},

        ]},
    {path: 'order', loadChildren: './order/order.module#OrderModule'},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path:'about', loadChildren: './about/about.module#AboutModule'},
]
