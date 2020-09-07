import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderSent: boolean = false;
  submitted: boolean = false;  //3-Bu arkadaşı ise form submit edilip edilmeme durumnu sorgulamak için başlattık.Ayrıca aşağıdaki metodta true'ya döndürdük ki kullancı submit işlemini yapmış olmuş olsun diye.

  constructor(
    public order: Order,  //1-checkout html sayfasında form içerisinde input altında çift taraflı bind işlemi yapacağız ve orada name ismini order'dan çekbilmemiz için Order'ı ctor içine eklememiz gerekiyor.
    private orderRepository: OrderRepository
  ) { }

  ngOnInit() {
  }

  submitOrder(form: NgForm) {  //2-Bu metodumuzu html ksmında tanımladığımız form kısmında submit işlemini gerçekleştrmek için yapıyoruz. 
    this.submitted = true;

    if(form.valid) {
      this.orderRepository.saveOrder(this.order) //4-repository'den çağırdıüımız bu metod bir observable çağıdıüı için subs metodundan yardım almamız gerekiyor.
        .subscribe(order => {
          this.order.clearOrder();
          this.orderSent = true;
          this.submitted = false;  //5-bunlarla birlikte kullanıcının form'u submit ettiğini ve tekrar sipariş verme durumuna geçiş yapabilmesini sağlamış olduk
        })
    }
  }

}
