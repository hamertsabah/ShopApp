//1-normalde bütün repository'lere hizmet edecek ortak bir tane oluşturabiliriz ancak biz bunları ayı ayrı yapayı tercih ettşk.
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Order} from './order.model';
import {RestService} from './rest.service';

@Injectable() //4-Servs olarak kullancağımızdan ötürü inectable'ı dahil diyoruz. Bundan sonra order ve oderRepository'yi ortak module'e yani model module'ün providers'ına kaydetmemiz gerekiyor

export class OrderRepository {
    private orders: Order[] = [];

    constructor(    //2-ctor çerisinde sorularımızı http üzerinden göndereceğimiz için RestService'i ekliyoruz
        public restService: RestService  
    ) {

    } //3-Aşağısı ise gönderecek olduğumuz http mtodlarını yazacağız.


    getOrders(): Order[] {
        return this.orders;
    }
    saveOrder(order: Order): Observable<Order> {
        return this.restService.saveOrder(order);
    } 

}