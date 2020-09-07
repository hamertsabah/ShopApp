import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  //1-Burada öncelikle cart objesini kullancağımızdan gereken şeyleri ctor içerisinde inject ediyoruz 
  constructor(
    public cart: Cart
  ) { }

  ngOnInit() {
  }

}
