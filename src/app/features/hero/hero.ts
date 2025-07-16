import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { Typewriter } from '../../shared/typewriter/typewriter';

@Component({
  selector: 'app-hero',
  imports: [Typewriter],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Hero {
  isDarkModeInput = input<boolean>();

  nameText = 'Hi, I\'m Neil Dhand';
  title = 'Full Stack Software Engineer'
  descriptionText =
    'Full-stack software engineer with expertise in TypeScript, Node.js, and Angular. Proven leader in developing scalable web applications and mentoring engineers. Seeking to leverage technical skillset to drive impactful solutions in a collaborative tech environment.';
  
  darkModeClasses = {
    parentSection: 'from-stone-800 via-zinc-900 to-stone-800 text-white ',
  };
  lightModeClasses = {
    parentSection: 'from-stone-800 via-zinc-900 to-stone-800 text-black ',
  }
  currentModeClasses = computed(() => this.isDarkModeInput() ? this.darkModeClasses : this.lightModeClasses);
}
