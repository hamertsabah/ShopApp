//*** Şimdi misal app modül içerisinde angular içerisinden gelen  moduller yada kendi oluşturduğumuz componentler olduğu gibi aynı mantıkla model klasörü içerisindeki bütün  kodlamaları da buna ekliyoruz. Misal httpClientModule'ü gidip oraya eklemedik buraya ekledik. 
//-Çünkü app module sorgulamayı direk http üzerinden yapmayacak app module yada shop module bir veriye ihtiyacı olduğu zaman gelip buradan alacak... Yani kısacası biz model klasörü içerisinde oluştruduğumuz bilgileri paketlememiz gerekiyor ve onu da buradaya providers'a eklemekle yapmış oluyoruz.

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { ProductRepository } from './product.repository';
import { CategoryRepository } from './category.repository';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';


@NgModule({
    
    imports: [ HttpClientModule ], //1-category repository'sini de tanımladıktan sonra bu dosyanın içerisinde demisal daha önceleri http ile işlemler yapacağımız için bu hazır modülü çağrmıştık.Model içindeki bunları bir paket içine almak için providers içine servisleri ekleyebileceğiz paket içerisinde
    
    providers: [RestService, ProductRepository, CategoryRepository, Cart, Order, OrderRepository],   //2-Servislerimizi model modülümüze ekledikten sonra bunu dışarı açacağız bunun için shop.module.ts'e gittik ve orada da decorator ve ngModule gibi şeleri dahil ediyoruz.
})      //3-providers kısmına son olarak order servicelerimizi dahl etttikten sonra artık unları shop'ta kulanmaya başlayabilirzi.
export class ModelModule {}