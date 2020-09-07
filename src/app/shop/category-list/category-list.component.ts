import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public selectedCategory: Category = null;

  @Output() category = new EventEmitter<Category>();  //1-Bu output decorator'umuz tıpkı input'ta olduğu gibi bir decorator lakin bunun görevi category'ye ait bilgileri bu sefer aşağı doru değil yukarı doğru dosyalara aktarıyor olması için. Yani buradaki decorator sayesinde shop ts ve html'de ilgili yerler birbiriden haberdar olması sağlanmış olacak.
                                                      //--Bundan sonraki işlemimiz ise aşağıda changeCategory'de dışarıdan alınan category bilgisi seleced'a atanıyor ancak bundan sonra da category bilgisini set edyor olmamız gerekiyor.

  constructor(
    private categoryRepository: CategoryRepository
    
  ) { }

  ngOnInit() {
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();  
}
changeCategory(newCategory? : Category) {  
        this.selectedCategory = newCategory; 
        this.category.emit(newCategory); //2-Bunu yazmamızla yani emit fonksiyonu aracılığıyla kullanıcıın seçtiği new category'i dılarııya açmış oluoruz. Bu işlemden sonra ise ulaşmak istediğimiz categori bilgisine shop comp'tan ulaşmak için gerekli adımları atacağız.
    }

}
