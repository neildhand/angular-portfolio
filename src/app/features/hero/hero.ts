import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Hero {
  descriptionText =
    'Full-stack software engineer with expertise in TypeScript, Node.js, and Angular. Proven leader in developing scalable web applications and mentoring engineers. Seeking to leverage technical skillset to drive impactful solutions in a collaborative tech environment.';
}
