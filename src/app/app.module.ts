import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShopModule } from './shop/shop.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,  //1-Shop module'ü buraya tanımlamamızla birlikte shop component'te ulaşılabilir olmuş oldu.Çünkü export ile orada açmıştık 
    RouterModule.forRoot([
      { path: 'shop', component: ShopComponent},
      { path: 'cart', component: CartDetailComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }, //4-admin compıınent'inin normal routlardan ayrı bir şekilde yalnızca çağırıldığında gelecek bir biçimde bu şekilde yazıyoruz. Bundan sonra shop module'deki navigation kısmında Admin'e ait sekmeleri aldık hepsini admin altında birleştireceğiz.
      { path: '**', redirectTo: "/shop" }
    ])
  ],  //2-ve en nihayetinde app module'ü de main.ts içerisnde çalıştırılabilir şekilde hazırlayacağız. ve app module çalıştığı anda da app component çalıştırılacak. app component'in ise çağırılma işlemini root ile yapıyorduk html için.
      //3-App component çağırıldığında ise app comp içerisindeki template içerisine <shop> taglarını çağırarak bu template'i eklemiş olurum
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
