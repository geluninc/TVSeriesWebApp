import { Injectable } from '@angular/core';

export const whiteTheme = {
  'gradient': 'linear-gradient(to right, rgb(102, 125, 182), rgb(0, 130, 200), rgb(0, 130, 200), rgb(102, 125, 182))',
  'background': '#d9d9d9',
  'background-lighter': '#f3f3f3',
  'background-darker': '#c0c0c0',
  'text-color-normal': '#3d6cb9',
  'text-color-lighter': '#7296d1',
  'text-color-darker': '#2a4a7f',
  'highlight-lighter': '#4dfff5',
  'highlight': '#00e6d8',
  'highlight-darker': '#00b3a8',
}

export const darkTheme = {
  'gradient': 'linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))',
  'background': '#141414',
  'background-darker': '#000000',
  'background-lighter': '#9A031E',
  'text-color-lighter': '#f2f2f2',
  'text-color-normal': '#d8d8d8',
  'text-color-darker': '#bfbfbf',
  'highlight-lighter': '#16cfd2',
  'highlight': '#0f8b8d',
  'highlight-darker': '#084748',
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  toggleWhite() {
    this.setTheme(whiteTheme);
  }

  toggleDark() {
    this.setTheme(darkTheme);
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
