import { Component, OnInit } from "@angular/core";
import { CartItem } from "app/restaurants-detail/shopping-car/cart-item.model";
import { RadioOption } from "app/shared/radio/radio-option-model";
import { Order, OrderItem } from "./order.model";
import { OrderService } from "./order.service";
import {Router} from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html",
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  delivery: number = 8;
  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de Débito", value: "DEB" },
    { label: "Cartão Refeição", value: "REF" },
  ];

  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('')

    })
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
    .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order)
    .subscribe((orderId: string)=>{
      this.router.navigate(['/order-summary'])
      console.log(`Compra Concluída ${orderId}`)
      this.orderService.clear()
    })
    console.log(order);
  }
}
