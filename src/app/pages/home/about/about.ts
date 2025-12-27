import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-about',
  imports: [RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
features = [
    {
      title: 'خفيف الوزن',
      desc: 'لا يشكل حملاً على المبنى مقارنة بالحجر',
      icon: 'assets/icons/feather.png'
    },
    {
      title: 'سهولة التشكيل',
      desc: 'زخارف دقيقة تناسب التصاميم الكلاسيكية والحديثة',
      icon: 'assets/icons/tools.png'
    },
    {
      title: 'مقاوم للعوامل الجوية',
      desc: 'يتحمل الشمس والرطوبة بفضل الطبقة الأسمنتية',
      icon: 'assets/icons/shield.png' 
    }
  ];
}
