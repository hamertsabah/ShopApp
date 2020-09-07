//1-Bu component'i sop html sayfamızda cart'taki ürünleri gösterimesi için özel olarak oluşturduk.

import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
//2-html'de sol üst kısmda bir sepet özeti şeklinde bir kısım tanmlamıştık ve ilk olarak da burada cart objesini ctor içerisinde ulaşmış olmamız gerekiyor.
  constructor(public cart: Cart) {
    
  }

  ngOnInit() {
  }

}
