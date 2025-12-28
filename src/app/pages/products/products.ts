import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // مهم جداً للـ @if
import { PageHeader } from './page-header/page-header';
import { ProductFilter } from './product-filter/product-filter';
import { ProductDetailsModal } from './product-details-modal/product-details-modal';
import { ProductGrid } from './product-grid/product-grid';

@Component({
  selector: 'app-products',
  standalone: true, // تأكدي أنها Standalone لو بتستخدمي Angular الحديث
  imports: [CommonModule, PageHeader, ProductFilter, ProductGrid, ProductDetailsModal],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  currentFilter: string = 'all';

  // المتغيرات التي كانت ناقصة وتسببت في الأخطاء
  isModalOpen: boolean = false;
  selectedProduct: any = null;

  onFilterChange(category: string) {
    this.currentFilter = category;
  }

  // دالة لفتح المودال (يجب استدعاؤها من الـ Grid)
  openProductModal(product: any) {
    this.selectedProduct = product;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProduct = null;
  }
}
