import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-filter',
  imports: [CommonModule],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter {
// الحدث اللي هينطلق لما العميل يختار تصنيف
  @Output() filterChange = new EventEmitter<string>();

  categories = [
    { id: 'all', name: 'الكل', icon: 'fas fa-th-large' },
    { id: 'grc', name: 'فوم GRC', icon: 'fas fa-monument' },
    { id: 'eps', name: 'فوم EPS', icon: 'fas fa-cubes' },
    { id: 'thermal', name: 'عزل حراري', icon: 'fas fa-temperature-low' }
  ];

  activeCategory: string = 'all';

  selectCategory(id: string) {
    this.activeCategory = id;
    this.filterChange.emit(id); // إرسال القيمة للـ Parent
  }
}
