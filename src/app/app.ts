import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, RouterOutlet],
  template: `
    <app-header></app-header>

    <main class="page-content">
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `
})
export class AppComponent {}
