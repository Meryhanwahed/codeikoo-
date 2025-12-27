import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials {
  reviews = [
    {
      text: 'فوميكس غيرت مفهومنا عن تشطيب الواجهات، النتيجة كانت مذهلة والوزن خفيف جداً على المبنى.',
      author: 'م. أحمد كمال',
      role: 'مهندس استشاري'
    },
    {
      text: 'السرعة في التنفيذ والدقة في الزخارف كانت فوق التوقعات. أنصح بهم بشدة لأي مطور عقاري.',
      author: 'أ/ فاطمة حسن',
      role: 'مالكة عقار'
    }
  ];
}
