import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';




@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],  //1-Burada aynen sanki angular module alıyormuş gibi  model.module'ü ekleyerek bu dosya içerisindeki bütün temsilleri veya dosyalara erişme znim var.  
                             //2-Shop component'imizin içine gelmesini istediğimiz ve tıpkı en nihayetinde app module bağlanacak olan componentlerimiz için burada da gerekli modulelerimizi import dizini içine ekledik. Buradaki eklemelerden sonra ayrıca shop module'ü app module içerisine gönderecğiz.
                             //--gönderirken de bir component olması durumlarından dolayı export dizini tanımladık alta. ve tabiki decleration kısmının da tanımlanıyor olması lazım geliyor.
    //providers: [],  //3-Bir servis tanımlamamız olmadığı için providers'a burada ihtiyaç duymuyoruz
    declarations: [ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent, ProductListComponent, CategoryListComponent],  //5-Decleration kısmında component tanımlamaları yapılmaktaydı.
    exports: [ShopComponent, CartDetailComponent, CheckoutComponent]  //4-exportsla buradaki tanımlamamızı da dışarı açtıktan sonra imports içerisine orada kendi tanımladığımız module'ü artık hazır bir modül gibi çağırabileceğiz....
}) 
//6-decleration kısmında ilgili component'i tanımlayıp export ile de bunu dışa açacağımızı belirttikten sonra aynı diğer module birleştirmelerinde olduüu gibi appmodule içerisinde shopmodule'ü gerekli yerlere dahil edeceğiz.(impoerts kısmına yani)
export class ShopModule {

}