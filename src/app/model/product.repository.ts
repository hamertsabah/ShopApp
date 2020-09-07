//1-İlk olarak product şekllinde oluşturduğumuz bu repository dosyamızı ilerleyen aşamalarda order category vs. şeklinde de üreteceğiz.
//--bu repository class'larını model klasörü içerisine eklememizdeki sebep buradaki model içeriklerini ister shop ister admin içerisinde kullanıyor olacağız. Yani component deosyamıza gittiğimiz zaman tamamen repository lerle ilgilenmiş olacağız.(Yada service sınıflarıyla direk repository alakadar olmuş olacak ve biz yani direk servise gitmeyeceğiz)
//--Ve buras servis sınıflarındanoluşacağı için injectable decoratable'ını almamız gerekiyor 
import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { Product } from './product.model';
import { RestService } from './rest.service';


@Injectable()  //2-Injectble içerisindeki providedIn: 'root' klasörü bunu bize nereden çağıracağıyla ilgili bir durum yani burada ve rest service'tekine ihtiyacımız olmadığından kaldırdık.
 export class ProductRepository implements OnInit { //4-Bunu implementeyi 3. adımdan sonra yazmayı denedikten sonra şağı ctor'un altına ngOninit'i tanımladık
    private products: Product[]= [];

    constructor(private restService: RestService) {  //3-restservice'i çağırmala http servislerini çağırmış oluyoruz. Bundan sonra products alanını dlduracağız bunun için ise ctor değil de ngInit içerisinde yapacağız bunu 
        this.restService
            .getProducts()
             .subscribe(products => this.products = products);
    }

    ngOnInit() {
        /*this.restService
            .getProducts()
            .subscribe(products => this.products = products); */  //6-Buradaki satırları sonraki derslerde asenkron bir işlem yaptığımızdan dolayı gidip constructor'ın içerisine kopyaladık.Çünkü component oluşturulduğunda product objesinin içerisinin asenkron bir şekilde metodtan gelen bilgileri dolduruyor olmasını istiyorum.
    }  //5-Bununla producs2lara ulaşabildikten sonra aşağıda da tek bir product'a ihtiyaç duyduğumda gerekeni yapacağım.(gtProduct)

    getProduct(id: number): Product {
        return this.products.find(i => i.id === id);
    }

    getProducts(category: Category = null): Product[] { //7-Burada shop.comp ts içerisindeki get products'ta ve ona bağımlı dosyalarda seçili olan product'ların ait olduğu categorileri belirlemek amacıyla içine bir category nesnesi beklediğini burada belirtmiş olduk. ve tabiki null başlatıyoruz ki verilmediği durumlarda olabilir diye. Bundan sonra ise aşağıda bir filtreleme işlemi gerçekleştireceğiz
        if(category)
            return this.products.filter(p => p.category == category.name);  //8-burada şu oluyor ki; gelen her bir product bilgisinin p.categori alana ile gönderdiğimiz  categoriyi karşılaştıralım eğer bir eşitlik söz konusu ise bu durumda kategoriye göre bir filtreleme yapacağız. Ancak burada bir kategori var mı yok mu diye kontrol etmemiz amacıyla if ile sorgulamalar yapmamız gerekiyor. 
         else 
            return this.products;
        
    }


 }