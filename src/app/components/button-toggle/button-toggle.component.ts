import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonMeta } from './button-meta.modal';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
  @Input() options: ButtonMeta[] = [];
  @Input() replace: { oldValue: string, newValue: string };
  @Output() selection = new EventEmitter<ButtonMeta>();

  constructor() { }

  ngOnInit() {
  }

  public selected(selectedOption: ButtonMeta): void {
    this.options.forEach((option) => {
      option.isActive = (selectedOption === option);
    });

    this.selection.emit(selectedOption);
  }
}
