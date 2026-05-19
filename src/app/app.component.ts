import { Component, signal } from '@angular/core';
import { CardapioHomeComponent } from './pages/cardapio-home/cardapio-home.component';

@Component({
  selector: 'app-root',
  imports: [CardapioHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('alpha-cardapios');
}
