import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-set',
  templateUrl: './field-set.component.html',
  styleUrls: ['./field-set.component.scss']
})
export class FieldSetComponent implements OnInit {
  @Input() public legend = '';
  @Input() public isOpen = true;

  constructor() { }

  ngOnInit() {
  }

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }

}
