import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardapioHomeComponent } from './pages/cardapio-home/cardapio-home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardapioHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('alpha-cardapios');
}
