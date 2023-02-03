import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {

  @Input() public tableDatas: any[] = [
    { first: 'Zin Ko', last: 'Winn', dob: '25/1/2002' },
    { first: 'Zin Ko', last: 'Winn', dob: '25/1/2002' },
    { first: 'Zin Ko', last: 'Winn', dob: '25/1/2002' },
    { first: 'Zin Ko', last: 'Winn', dob: '25/1/2002' },
    { first: 'Zin Ko', last: 'Winn', dob: '25/1/2002' }
  ];

  @Output() public headerSelected = new EventEmitter<{ key: string, value: any }>();

  constructor() { }

  ngOnInit() {
  }

  public headerSelection(key: string, value: any): void {
    this.headerSelected.emit({ value, key });
  }
}
