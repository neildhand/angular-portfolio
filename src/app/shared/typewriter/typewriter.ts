import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  imports: [],
  templateUrl: './typewriter.html',
  styleUrl: './typewriter.css'
})
export class Typewriter {
  text = input<string>('');
  speed = input<number>(50); // milliseconds per character
  showCursor = input<boolean>(true);
  delay = input<number>(0); // milliseconds delay

  displayText = signal('');

  ngOnInit() {
    setTimeout(() => {
      this.typeText();
    }, this.delay());

  }

  async typeText() {
    for (let i = 0; i <= this.text().length; i++) {
      this.displayText.set(this.text().slice(0, i));
      await new Promise(res => setTimeout(res, this.speed()));
    }
  }
}
