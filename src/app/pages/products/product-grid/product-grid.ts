import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from './product-card/product-card';
@Component({
  selector: 'app-product-grid',
  imports: [CommonModule, ProductCard],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css',
})
export class ProductGrid implements OnChanges {

  @Input() selectedCategory: string = 'all';

  allProducts = [
    {
      id: 1,
      name: 'تاج عمود روماني GRC',
      category: 'grc',
      categoryLabel: 'فوم GRC',
      shortDesc: 'دقة متناهية في التفاصيل الكلاسيكية.',
      image: 'assets/images/grc-1.webp',
      specs: { density: '35kg/m³', resistance: 'عالي' }
    },
    {
      id: 2,
      name: 'كرنيش EPS مودرن',
      category: 'eps',
      categoryLabel: 'فوم EPS',
      shortDesc: 'خفة وزن وسهولة في التركيب للواجهات.',
      image: 'assets/images/eps-1.webp',
      specs: { density: '20kg/m³', resistance: 'متوسط' }
    },
    {
      id: 3,
      name: 'لوح عزل حراري X-100',
      category: 'thermal',
      categoryLabel: 'عزل حراري',
      shortDesc: 'حماية قصوى ضد تسرب الحرارة.',
      image: 'assets/images/thermal-1.webp',
      specs: { density: '40kg/m³', resistance: 'مقاوم للحريق' }
    }
  ];

  filteredProducts = [...this.allProducts];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCategory']) {
      this.applyFilter();
    }
  }

  applyFilter() {
    this.filteredProducts =
      this.selectedCategory === 'all'
        ? this.allProducts
        : this.allProducts.filter(
            p => p.category === this.selectedCategory
          );
  }

  handleDetails(product: any) {
    console.log('Product Selected:', product);
  }
}
