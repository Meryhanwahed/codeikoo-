import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html', 
})
export class AppComponent {}
