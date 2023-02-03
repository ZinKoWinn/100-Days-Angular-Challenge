import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() public counter = 0;
  @Input() public min = 0;
  @Input() public max: number = Number.MAX_SAFE_INTEGER;

  constructor() { }

  ngOnInit() {
  }

  public decrement(): void {
    if (this.min < this.counter) {
      this.counter--;
    }
  }

  public increment(): void {
    this.counter++;
  }
}
