import { Component, signal } from '@angular/core';
import { Header } from "./features/components/header/header";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
