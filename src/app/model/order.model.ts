import { Injectable } from '@angular/core';
import {Cart} from './cart.model';



@Injectable()  //3-Order'ı da bir servis olarak kullancağımızdan ötürü injectable'ı yazmamı gerekiyordu.
            //4.Bndan sonra ise; kullanıcı bir sipariş vermek istediği zaman siparişi http üzernden oluşturacağımız bir metoda gönderiyor olması gerekiyor.Bunun için rest.service'e saveOrder adında bir metod tanımlıyoruz.

export class Order {
    public id: number;
    public name: string;
    public address: string;
    public city: string;
    public phone: number;
    public email: string;

    public isSent: boolean = false;

    constructor(       //1-ctor oluşturacağız çünkü order içerisinde kullanıcının verdiği daha önceden cartına eklediği bilgilere erişiyor olmamız gerekiyor
        public cart: Cart  //2-Bizim burada inject ettiğimiz servisler singlton mantğıyla çalışıyor yani uygulama boyunca herhangi bir class içerisinde tek bir kopya üzerinden oluşturuluyor.Dolayısıyla order mdel içerisindeki cart objesine yada başka bir...
    ) {                    //..class içerisinde inject ettiğim başka bir objeye hep aynı olan objeye ulaşacağından ötürü o obje nelere sahipse sahp olduğu şeylerle birlikte gelir.

    }    

    clearOrder() {
        this.id =null;
        this.name = this.address = this.city =this.email=this.phone= null;
        this.isSent = false;
        this.cart.clear(); 
    }
}