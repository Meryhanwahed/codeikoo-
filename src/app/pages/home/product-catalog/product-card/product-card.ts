import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  @Input() title: string = 'خفيف الوزن';
  @Input() description: string = 'لا يشكل حمل';
  @Input() icon: string = 'assets/images/product-card.png'; 
}
