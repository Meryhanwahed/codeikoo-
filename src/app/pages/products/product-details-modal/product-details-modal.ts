import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details-modal',
  imports: [CommonModule],
  templateUrl: './product-details-modal.html',
  styleUrl: './product-details-modal.css',
})
export class ProductDetailsModal {
@Input() product: any; // استقبال بيانات المنتج المختار
  @Output() onClose = new EventEmitter<void>(); // حدث لإغلاق المودال
  

  closeModal() {
    this.onClose.emit();
  }
}
