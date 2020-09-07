//1-Buradaki rest service'imiz bir http moduülünü kullancak. Biz burada ve model.module klasörümüzde gerekli serviceleri felan kuracağız çünkü bunları daha ayrıca yapmış oluoruz böyllike.
//2-İlk olarak gidip model module'de yaptığımız importalrdan sonra şimdi de gelip burada gerekli requestLeri gerçekleştirebiliriz.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { Product } from './product.model';
import { Order } from './order.model';

@Injectable()
export class RestService {

  baseUrl: string = 'http://localhost:3500/';

  constructor(private http: HttpClient) { }  //6-Bu şekilde http requestlerini gerçekleştirebiliyorduk
 
  getProducts(): Observable<Product[]> {  //3-Buradaki metodumuz http üzerinden sorgulama yaptığı için bize observable bir listesi gelir.Observable listesinin bize gelmesindeki yarar ki misal bu işlem servera hemen gitmeyecek nezaman gidecek biz .subs metodunu tanımlar tanımlamaz.
                   //--Biz bu subs içersiine gerekli olanları al falan gibi şeyleri koyabiliyoruz. Yani bundan ayrı olarak misal biz data js içerisindek bilgileri bize getir ve buları bir class içinde sakla dersek uygulama tarafında rahat edeiz. dolayısıyla model class'ıiçerisine bir model ekliyoruz product.model.ts adında.
    return this.http.get<Product[]>(this.baseUrl + 'products');  //4-Yukrıda bilginin observable product dizisi şeklinde gelmesini belirttik belirtmeseydik object tipinde bir veri bize gelecekti.(Ve bu obs belirttiğimizde aşağıdaki get'inde <product> olduğunu belirtmemiz gerekti.) Ve bu işlemden sonra ise category.model.ts dosyası oluşturacağız.
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'categories');  //5-Bu işlemden sonra artık http metodlarını barındıran bir servis dosyasını oluşturduk ve bu dosyayı tabiki farklı yerlerden çağıracağız dolayısıyla metodlar içerisindeki http sorgularını gönder ancak göndermeden önce ben bunları subsc.. metodu ile bunları inceleme fırsatını bulayım.
                                                                      //--Yani misal herhangi ekistradan bir filtreleme göndermek istersem  product'lar değilde fiyatı 1000 liradan fazla olanları subs içerisinde talep edebileyim .Bu şekilde anlattığımız özelleştirilmiş olan metodları barındıracak olan bir alanımız olmalı; bunlara ise repository sınıfları diyoruz....


  }

  saveOrder(order: Order): Observable<Order> {  //9-Burada kullanıcının siparişi almak için oluşturduğumuz bu metodda daha önceden de bildiğimiz gibi buradan direk http metoduna göndermeyeceği bunu bir repository aracılığıyla çağıracağız. 
    return this.http.post<Order>(this.baseUrl + 'orders', order); //10-Bu metodumuzu order.repository şeklinde oluşturduğumuz bir doya üzerinden tanımlamak için repository'yi oluşturuyoruz.
  }


   //7-Burdaki metodları tanımlamamızla birlikte http requestleri için gerekli metodları tanımlamamızla birlikte service'e ait yükümlülükler görülmüş oldu. Bu aslında bir back-end fiiliydi. 
   //8-Bir de misal biz getProduct'ı çağırdığımız yerde bir de subscribe metodu yardımıyla belirli özellikleri filtreleyebilme özelliğğine sahip olacağız bu metodları tanımlamak için ise repository dediğimiz dosyalardan faydalanacağız.(Yani bu adda dosyalar oluşturacağız.)



}
//*** Buradaki metodlarımız bize gerekli http metodları üzerinden bize bir observable listesi gönderecek  ve biz bu listeyi alıp ne zaman subscribe metodunu çağırırım ozaman çağrımız database'e gerçekten gönderilir, (yani backend kısmına gönderilir) bilgiler bize gelmiş olur. Ve bu bilgileri de uygulama üzerinde istediğimiz gibi işleriz. Bundan sonra yapacağımız işlem ise rest service üzerinden tanımladığımız metodları repositoryler ile kullancağız.
//-Ayrıca ileride servis sınıflarıyla repository sınıfları ilgilenecek. Yani service'e gitmeden shop yada admin klasörü altındaki dosyalarda kullanacğız.