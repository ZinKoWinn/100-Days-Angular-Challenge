import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent implements OnInit {
  private readOnly = false;
  @Input() public creditCardNumber = '';

  public get isReadOnly() {
    return this.readOnly;
  }

  @Input() public set isReadOnly(value: boolean) {
    this.creditCardNumber = value ? this.formatReadOnlyCreditCardNumber(this.creditCardNumber) : this.creditCardNumber;
    this.readOnly = value;
  }

  constructor() { }

  ngOnInit() {
  }

  private formatReadOnlyCreditCardNumber(creditCardNumber: string): string {
    const parts = creditCardNumber.toString().match(/[\s\S]{1,4}/g) || [];
    const lastNumberShow = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return part;
      }
      return 'xxxx';
    });
    return lastNumberShow.join('-');
  }

}
