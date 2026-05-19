import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  showNotification = false;

  scrollToMenu(): void {
    const categoriesSection = document.querySelector('.categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  callWaiter(): void {
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 4500);
  }
}

