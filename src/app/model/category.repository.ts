//1-Burada yazacaklarımız product.repo dakilerle hemen hemenaynı olacağı için orayı buraya copy paste yapıyoruz.
//2-Şimdik uraya kadar herşeyi güzel koyaladık düzenledik. Bu klasörler altındaki moduüllerii ortak tanımladığımız bir app.module varya misal bunun gibi burada da mdel klasörü altında da bunları birleşriteceğimiz model.module.ts var. orada tanımlamalar yapacaağız

import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { RestService } from './rest.service';


@Injectable()  
 export class CategoryRepository implements OnInit {
    private categories: Category[]= [];

    constructor(private restService: RestService) {  
        this.restService
            .getCategories()
            .subscribe(categories => this.categories = categories);
    }

    ngOnInit() {
        /*
        this.restService
            .getCategories()
            .subscribe(categories => this.categories = categories); */ //3-shop.component.ts de kullanacağımız getCategories özeiiliğini tanımlarken buradaki satırları tıpkı product repository deki sebebten ötürü const içerisine taşıdık. Yani bununla component oluşturulmadan önce categories'in içerisi doldurulmuş olsun istiyoruz
    }  

    getCategory(id: number): Category {
        return this.categories.find(i => i.id === id);
    }
    getCategories(): Category[] {
        return this.categories;
    }


 }