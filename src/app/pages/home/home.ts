import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Testimonials } from './testimonials/testimonials';
import {ProductCardComponent} from './product-catalog/product-card//product-card'
@Component({
  selector: 'app-home',
  imports: [Hero,About,Contact,Testimonials,ProductCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
products = [
    {
      title: 'فوم GRC ديكوري',
      description: 'مثالي للزخارف الكلاسيكية والتيجان بدقة متناهية.',
      icon: 'assets/icons/grc.png'
    },
    {
      title: 'فوم EPS الحديث',
      description: 'خفة وزن فائقة وسهولة في التشكيل للواجهات المودرن.',
      icon: 'assets/icons/eps.png'
    },
    {
      title: 'عزل حراري',
      description: 'حماية متكاملة لمبناك من درجات الحرارة العالية.',
      icon: 'assets/icons/thermal.png'
    }
  ];
}
