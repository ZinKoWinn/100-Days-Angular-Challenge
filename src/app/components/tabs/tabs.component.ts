import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() public tabs: { title: string, active: boolean }[] = [];
  @Output() public selectedTabIndex = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public selectTab(selected: { title: string, active: boolean }, index: number): void {
    this.tabs.forEach((tab) => {
      tab.active = (selected === tab);
    });
    this.selectedTabIndex.emit(index);
  }

}
