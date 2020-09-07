import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[] = [];  //1-products ismini verdiğimiz bu input parametresi gidip shop component içerisinde product-list taglarına yazarak oradan almasını sağlayacak(Yani bu oradan aldığı değerleri buraya getirmesini sağlayacak)

  selectedProduct: Product = null; //2- Bu arkadaşı ise ürünlerin altındaki detay kısımarına tıklandığında bellli bir yerde detay gösterilsin diye bir değişken olrak başlattığımız bir şey...

  constructor(
        private cart: Cart,
        private router: Router
  ) { }

  ngOnInit() {
  }

  addProductToCart(product: Product) { //9-Burada kullancının cart'ının eklenmesi gerektiği içinöncelikler ctor içerisine cart'ı inject etmemiz gerekmektedir.
        this.cart.addItem(product);
        this.router.navigateByUrl('/cart');  //13-router tanımlamamızla birlikte artık kullanıcı ürünü sepete ekledikten sonra cart url'sine yönlendirebiliriz.
    }

    displayDetails(product: Product) {  //3-Product'ın altındaki butona tıklandığında buna ilgili product gidecek ve product'ta selectedProduct2a gönderilecek
      this.selectedProduct = product;
    }
    hideDetails() {
      this.selectedProduct = null;
    }
}
