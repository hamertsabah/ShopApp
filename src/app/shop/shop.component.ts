//1-Bu shop.comp ts dosyamızda bilgilerimizi repository üzerinden sorgulayacak olan kodlarımızı yazacağız burada. ilk olarak da component decorator'unu ekleyeceğiz.

import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';
import { Category } from "../model/category.model";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html'
})  //2-Ve tabiki bu class'ımızı export etmemiz gerekiyor.

export class ShopComponent { //3-Aşağıda sorgularımızı  gönderebilmemiz için ctor içerisinde öncelikle productRepository'ye ihtiyacımız olduğu için private olarak tanımladık

    public selectedCategory: Category = null; 
    public productsPerPage = 2; 
    public selectedPage = 1;
    public selectedProducts: Product[] = [];
    
    constructor(
        private productRepository: ProductRepository
         /* category repository vardı */           //4-Repository'leri tanımladıktan sonra class içerisinde iki tane özellik tanımlayacağız ki bunlar metod değil de normal özellik şeklinde tanımlamış olduğumuz şekilde olacak(property olarak çağırmak için...)
        
        ) {}
    
    
    get products(): Product[] {
        let index = (this.selectedPage - 1) * this.productsPerPage; 
        //1 * 3 = 3; Burada index numarasını aşağıda slice metodunun içerisine yazacağımız sayılarla şunu yapmış olacağız ki; ilk sayfada kaç ürün gösterilsin, gösterilen son üründen sonra ikinci sayfadaki ürünün index'iyle başlamış olsun.

        this.selectedProducts = this.productRepository
                                .getProducts(this.selectedCategory)
        return this.selectedProducts
            .slice(index, index + this.productsPerPage);  //9-Burada özetleyecek olursak ilk sayfadan sonra yani misal ilk 3 ürünü gösterdi, daha sonra da index + diyerek ikinci 3 ürünü kastetmiş ve listeletmiş oluruz.
    }   

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.productRepository
            .getProducts(this.selectedCategory).length/this.productsPerPage)) //11-Bu şekilde dediğimizde sayfa başına ürün sayısı gelecektir.(Yani misal bölüden önce ürün sayısı gelecek: 7, ve bölüden sonra da küsüratlı gelecek olan ürünü de üste yuvarlayacağız )
            .fill(0)
            .map((a,i) => i + 1);  //12-Yukarıdan itibaren özetleyecek olursak; math'den .fill'e kadar dizinin kaç elemanlı olduğunu hesapladık misal 3 elemanlı, ve dizi içerisinde başta fill ile 0 değerini attık ve 3 elemanlı bir dizinin her bir elemanını ilk başta 0 ile doldurduktan sonra da  map ile her bir elemanı dolaşıyoruz ve dolaştığımız her bir elemanın index numarasını yeni bir dizi olarak geriye döndürüyoruz.
    }

    changePage(p: number) {
        this.selectedPage = p; //10-selectedPage'i gönderdiğimiz değer ile değiştirmesi gerekiyor.
    }

    changePageSize(size: number) {  //14-Burada shop html'sinin sağ üst kısmında kullanıcının tek sayfada kaç ürün görmesini isterken seçtiği değere göre bir atama yapacağımız bir metod olacak. aşağıda eşitlediğimiz size değeri kullanıcıdan alınacak olan değer olmuş olacak.
        this.productsPerPage = size; 
        this.changePage(1); //15-Burada da otomatikman 1. sayfaya geçmesini sağlıyoruz.
    }

    getCategory(category: Category) {
        this.selectedCategory = category;
    }

   

    /*changeCategory(newCategory? : Category) {  //6-Bu metodu html2de sol col'daki kategorilerden birini seçtiğimizde (parantez içi seçtiğimiz kategorinin ismi olacak olan ) seçileni aktiif olduğunu göstrecek olan bir olay için oluşturuyoruz
        this.selectedCategory = newCategory; //7-Yani bu şu demek olyor ki kullanıcı bir link'e tıkladığı zaman seçili olan kategorinin selected kategori olduğunu belirtmiş olduk.(Tabi bunun için oradaki kategori col'unun olduğu ngFor'un olduğu  tagların içerisine click event'i tanımlayacağız ve bu event'te changeCategory metdnu çağıracak)
    }*/ //8-shop html'de click event'i tanımlandıktan sonra biz oradaki class'a direk aktive yazarak hepsi için geçerli yapmış olabilirdk ancak biz aktive class'ının sadece döngüden gelen c objesi ile comp. içinden daha önce set edilmiş olan bir kategori varsa nul değilse bu durumda aktive class'ını eklemek istiyorum. Dolayısıyla  orada bir class attrb binding işlemi yapmamız gerekecek.([class.aktive]="c==selectedCategory" ; yani sadecee true değer geldiği zaman)


    /*addProductToCart(product: Product) { //9-Burada kullancının cart'ının eklenmesi gerektiği içinöncelikler ctor içerisine cart'ı inject etmemiz gerekmektedir.
        this.cart.addItem(product);
        this.router.navigateByUrl('/cart');  //13-router tanımlamamızla birlikte artık kullanıcı ürünü sepete ekledikten sonra cart url'sine yönlendirebiliriz.
    }*/


}