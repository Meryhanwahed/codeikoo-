import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
// استقبال بيانات المنتج من الـ Grid
  @Input() product: any;

  // إرسال حدث للـ Grid عند الرغبة في رؤية التفاصيل
  @Output() onViewDetails = new EventEmitter<any>();

  viewDetails() {
    this.onViewDetails.emit(this.product);
  }

  openWhatsapp(event: Event) {
    event.stopPropagation(); // عشان ميفتحش المودال بالخطأ لما يدوس واتساب
    const message = encodeURIComponent(`مرحباً فوميكس، أود الاستفسار عن منتج: ${this.product.name}`);
    window.open(`https://wa.me/20123456789?text=${message}`, '_blank');
  }
}
