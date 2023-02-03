import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() public title = '';
  public isHidden = true;

  constructor() { }

  ngOnInit() {
  }

  public open(): void {
    this.isHidden = false;
  }

  public close(): void {
    this.isHidden = true;
  }

}
