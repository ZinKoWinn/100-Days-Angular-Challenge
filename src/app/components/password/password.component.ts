import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  public passwordStrengthPercent = 0;
  public currentPassword = '';

  constructor() { }

  ngOnInit() {
  }

  public set password(value: string) {
    this.currentPassword = value;
    this.updatePasswordStrength(value);
  }

  public get password() {
    return this.currentPassword;
  }


  public get is8CharsOrGreater(): boolean {
    return this.currentPassword.length >= 8;
  }


  public get hasOneCapitalLetterOrMore(): boolean {
    return /(.*[A-Z].*)/.test(this.currentPassword);
  }

  public get hasOneNumberOrMore(): boolean {
    return /(.*\d.*)/.test(this.currentPassword);
  }

  public get hasOneSpecialCharacterOrMore(): boolean {
    return /[$&+,:;=?@#|'<>.^*()%!-]/.test(this.currentPassword);
  }


  private updatePasswordStrength(value: string): void {
    let passwordStrength = 0;

    if (this.is8CharsOrGreater) {
      passwordStrength += 25;
    }

    if (this.hasOneCapitalLetterOrMore) {
      passwordStrength += 25;
    }

    if (this.hasOneNumberOrMore) {
      passwordStrength += 25;
    }

    if (this.hasOneSpecialCharacterOrMore) {
      passwordStrength += 25;
    }

    this.passwordStrengthPercent = passwordStrength;
  }

}
