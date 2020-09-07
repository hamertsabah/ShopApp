import {Product} from './product.model';
import {Injectable} from '@angular/core';
  //13-Ayrıca biz cart sınıfını bir servis olarak kullacağımıdan ötürü.yani kullanmak isediğimiz comp.ts dosyası içerisinde. Bu yüzden injct decorator'unu kullanmamız gerekiyor.
@Injectable()  //14-bu decorator ile birlikte artık angular cart class2ının inject edildiği aşamada bir nesne üretilmesine izin vermiş olacak.Yani biz cart'ı inject edeceğiz ctor içerisinde bu bize bir obje göndecek. Injectable işaretlememizden sonra artık bu cart sınıfını service olarak kullanabiliriz; ancak servisi ilgili module'e uani model.module'ün providers kısmına tanımlıyor olmamız gerekir.

export class Cart {  //2-Bunda ise cart item'ların bir listesi ve cart item listesiyle ilgili olan belli özellikler ve bunları oluşturacak metodlar olacak.
    public items: CartItem[] = [];  //Bu arkadaş carttaki ürünleri içeren bir dizi.
    public itemCount: number = 0;  //Bu cart'ımızda kaç tane üün var onu sayıyor.
    public total: number = 0;     //Bu cart içindeki toplam ürün fiyatını verecek.

    addItem(product: Product, quantity: number = 1 ) {  //3-Bunu add to cart butonuyla ilişkilendireceğiz html'de, ve ilgili product2.ı items'lar içerisine ekleyecek kullanıcı ve yanında da miktar belirtecek eğer beliirtmezse varsayılan olarak 1 değeri gelmiş olacak
        let item = this.items.find(i => i.product.id == product.id);  //4-Burada şunu yapmış oluyoruz ki; this.items'lar içeriisinde eklemek istdiğimiz ürün var mı yok mu onu kontrol ediyoruz
        if (item!=undefined) { //5-demek ki eklemek istediğimiz ürün kullanıcının karşısında var; ite.quantity bilgisini yukarıdan gelen quantity bilgisi kadar artıralım deriz.
            item.quantity+=quantity;
        } else {  //6-Bunda ise demek ki undefined değil yani kullanıcı bu ürünü ilk defa girmek istiyor.
            this.items.push(new CartItem(product, quantity)); //7-Cartitem sınıfını aşağıda tanımladığımı gibi bizden bir product bir de quantity bilgisi bekliyor.
        }
        this.calculate();
    }  //Kullanıcının herhangi bir aşamada cart bilgilerini güncellemek istiyoruz.yani misal kullanıcı yeni bir ürün eklediyse total ve quantity bilgileriniin güncellemesi gibi...Buyüzden aşağıda calculate'i tanımlayacağız.


    updateQuantity(product: Product, quantity: number) {  //11-Miktar güncellemesi için. ilk olarak addItem'da yaptığımız gibi mevzu bhis ürünü almak için oradaki ilk satırı aldık.
        let item = this.items.find(i => i.product.id == product.id);
        if (item!=undefined) {  //12-ürün varsa yani undefined değilse
        item.quantity = quantity;
        }
        this.calculate();

    }

    calculate() {
        this.itemCount = 0;
        this. total = 0;
        this.items.forEach(item => {
            this.itemCount += item.quantity;
            this.total += (item.quantity * item.product.price);  //8-Yani her bir ürünün miktarıyla fiyatını çarpıp total bilgisine ekleyeceğiz.Biz bumetodu her bir ürün eklediğimizde çağırıyor olmamız gerekir bu yüzden addItem metodunun altına ekliyoruz .
        })
    }
    removeItem(id: number) {
        let index = this.items.findIndex(i => i.product.id == id); //9-Yani liste üzerinden istediğimiz id'nin index numarasını buluyoruz.
        this.items.splice(index,1); //10-Belirtilen index'ten tibaren 1 elemanı sil demiş olduk. Bunn sonra da calculate ile tabiki hesaplatmamız gerekir.
        this.calculate();
    }
    clear() {
        this.items = [];
        this.itemCount= 0;
        this.total = 0;
    }

}

export class  CartItem {  //1-Bu class bir ürün bilgisini temsil edecek. misal 5 no lu id'ye sahip üründen  tane eklendiği gibi. Cartİtem'dan bir nesne ürtildiğinde ctor içerisinde beklenen özelliklerle bir nesne elimizde olul olacak
    constructor(
        public product: Product,
        public  quantity: number
    ) {

    }
}