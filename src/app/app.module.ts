import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// IMPORTANTO ROTAS
import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurants/restaurant/restaurant.component';
import { RestaurantsServices } from './restaurants/restaurants.service';
import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { ShoppingCarComponent } from './restaurants-detail/shopping-car/shopping-car.component';
import { MenuItemComponent } from './restaurants-detail/menu-item/menu-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantsDetailComponent,
    MenuComponent,
    ShoppingCarComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //IMPORTANDO ROTAS
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
