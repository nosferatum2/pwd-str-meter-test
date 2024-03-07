import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { PwdStrengthBarComponent } from './components/pwd-strength-bar/pwd-strength-bar.component';
import { AsyncPipe } from '@angular/common';

// Task:
//   Create applications to test password strength.
//
// The essence of the assignment:
//  [x] - Create a field for entering a password, under the field add 3 sections which will show the strength of
//  the password;
//  [x] - Changes in password strength must take place in real time;
//  [x] - How to calculate the strength of a password:
//      [x] - Only letters/digits/symbols - the password is easy;
//      [x] - Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
//      [x] - Has letters, symbols and numbers - the password is strong;
//  [x] - The color of the sections will depend on the strength of the password:
//      [x] - If the field is empty, all sections are gray;
//      [x] - If the field has less than 8 characters, all sections are red;
//      [x] - If the password is easy - the first section is red the rest are gray;
//      [x] - If the password is medium - the first two sections are yellow the last one is gray;
//      [x] - If the password is strong, all sections are green;

@Component({
  selector: 'app-input-pwd-strength',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInput,
    ReactiveFormsModule,
    PwdStrengthBarComponent,
    AsyncPipe
  ],
  templateUrl: './input-pwd-strength.component.html',
  styleUrl: './input-pwd-strength.component.scss'
})
export class InputPwdStrengthComponent {

  protected readonly Validators = Validators;

  passwordFormControl = new FormControl(
    '',
    [Validators.required, Validators.minLength(8)]
  );
}
