import { Component, signal } from '@angular/core';
import { Header } from "./features/header/header";
import { Hero } from "./features/hero/hero";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isPageColorDarkMode = signal(true);

  togglePageColorMode(mode: boolean) {
    console.log(mode);
    this.isPageColorDarkMode.set(mode);
  }
}
