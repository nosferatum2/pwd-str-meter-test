import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { DIGIT, LETTER, SPECIAL_CHAR } from './regExp';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged } from 'rxjs';

export enum StrengthIndicatorColor {
  gray = 'gray',
  red = 'red',
  yellow = 'yellow',
  green = 'green'
}

@Component({
  selector: 'app-pwd-strength-bar',
  standalone: true,
  imports: [],
  templateUrl: './pwd-strength-bar.component.html',
  styleUrl: './pwd-strength-bar.component.scss'
})
export class PwdStrengthBarComponent implements OnInit {

  @Input() passwordFormControl!: FormControl; // "!" - to avoid strict angularCompilerOptions error

  strengthLevel = [
    StrengthIndicatorColor.gray,
    StrengthIndicatorColor.gray,
    StrengthIndicatorColor.gray
  ]

  destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.passwordFormControl.valueChanges
      .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe((pwd) => {
        this.measureStrength(pwd);
      })
  }

  private measureStrength(pwd: string | null) {
    let indicators = 0;
    let variations: RegExp[] = [
      LETTER,
      DIGIT,
      SPECIAL_CHAR
    ];

    if (!pwd) { // color of the bar will be gray
      this.strengthLevel.map((_, index) => {
        this.strengthLevel[index] = StrengthIndicatorColor.gray
      })
      return;
    }

    indicators = variations.map(val => val.test(pwd))
      .filter(val => val).length;

    if (pwd.length === 0) { // color of the bar will be gray
      this.strengthLevel.map((_, index) => {
        this.strengthLevel[index] = StrengthIndicatorColor.gray
      })
    }

    if (pwd.length < 8) { // color of the bar will be red
      this.strengthLevel.map((_, index) => {
        this.strengthLevel[index] = StrengthIndicatorColor.red
      })
    }

    if (pwd.length >= 8 && indicators === 1) { // color of the bar will be green
      this.strengthLevel.map((_, index) => {
        if (index < indicators) {
          this.strengthLevel[index] = StrengthIndicatorColor.red
        } else {
          this.strengthLevel[index] = StrengthIndicatorColor.gray
        }
      })
    }

    if (pwd.length >= 8 && indicators === 2) { // color of the two bar indicators will be yellow
      this.strengthLevel.map((_, index) => {
        if (index < indicators) {
          this.strengthLevel[index] = StrengthIndicatorColor.yellow
        } else {
          this.strengthLevel[index] = StrengthIndicatorColor.gray
        }
      })
    }

    if (pwd.length >= 8 && indicators === 3) { // color of the bar will be green
      this.strengthLevel.map((_, index) => {
        if (index < indicators) {
          this.strengthLevel[index] = StrengthIndicatorColor.green
        }
      })
    }
  }

}
