export class Category {
    constructor (
        public id?: number,
        public name?: string
    ) {

    }
} //1-Category model sınıfını da tanımladıktan sonra getProducts'ta olduğu gibi getCategory'yi rest service'e tanımlayacağız.
//2-category modelimizi tanımladıktan sonra bunu rest service içerisinde getCategory şeklinde bir metod ile tanımlatacağız oradaki metod buradaki category bilgilerinin özelliklerini içermiş olacak.