export class Product {
    //1-Burada da product üzerinden bir nesne oluşturacağım için ctor içinde yazdığımız gibi dışarıdan parametreler alaacağım 
    constructor(
        public id?: number,
        public name?: string,
        public price?: number,
        public imageUrl?: string,
        public description?: string,
        public category?: string
    ) {

    }
}