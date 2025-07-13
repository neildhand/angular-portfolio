import { Component, computed, output, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuOpen = false;
  isDarkMode = signal(true);
  darkModeClasses = {
    header: 'from-stone-800 via-zinc-900 to-stone-800 ',
    navNameSpan: 'text-white ',
    navLi: 'text-white hover:text-indigo-300 ',
    resumeBtn: 'bg-stone-600 hover:bg-zinc-500 text-white ',
    darkModeToggleBtn: 'text-white ',
    svgColor: 'white '
  };
  lightModeClasses = {
    header: 'from-zinc-300 via-stone-400 to-zinc-300 ',
    navNameSpan: 'text-black ',
    navLi: 'text-black hover:text-indigo-800 ',
    resumeBtn: 'bg-zinc-200 hover:bg-stone-400 text-black ',
    darkModeToggleBtn: 'text-black ',
    svgColor: 'black '
  }
  currentModeClass = computed(() => this.isDarkMode() ? this.darkModeClasses : this.lightModeClasses);
  isDarkModeOutput = output<boolean>();

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleDarkMode() {
    this.isDarkMode.set(!this.isDarkMode());
    this.isDarkModeOutput.emit(this.isDarkMode());
  }
}
