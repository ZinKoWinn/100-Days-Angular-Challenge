import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() public isOn = false;
  @Output() public valueChanges = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public toggle(): void {
    this.isOn = !this.isOn;
    this.valueChanges.emit(this.isOn);
  }

}
