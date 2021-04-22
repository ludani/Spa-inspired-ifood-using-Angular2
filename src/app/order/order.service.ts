import { Injectable } from "@angular/core";
import { CartItem } from "app/restaurants-detail/shopping-car/cart-item.model";
import { ShoppingCartService } from "app/restaurants-detail/shopping-car/shopping-car-service";
import { Observable } from "rxjs/Observable";
import { Order, OrderItem } from "./order.model";
import { Http, Headers, RequestOptions } from "@angular/http";
import { MEAT_API } from "../app.api";

@Injectable()
export class OrderService {
  delivery: number = 8;
  constructor(private cartService: ShoppingCartService, private http: Http) {}

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }
  clear() {
    this.cartService.clear();
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(
        `${MEAT_API}/orders`,
        JSON.stringify(order),
        new RequestOptions({ headers: headers })
      )
      .map((response) => response.json())
      .map(order => order.id)
  }
}
