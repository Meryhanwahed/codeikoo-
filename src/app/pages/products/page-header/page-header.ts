import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './page-header.html',
  styleUrl: './page-header.css',
})
export class PageHeader {
  @Input() title: string = 'منتجاتنا';
  @Input() backgroundImage: string = 'assets/images/header-bg.webp'; // صورة افتراضية
}

