import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
isLoggedIn = signal(false);

toggleLogin(){
  this.isLoggedIn.update(v => !v);
}
}
