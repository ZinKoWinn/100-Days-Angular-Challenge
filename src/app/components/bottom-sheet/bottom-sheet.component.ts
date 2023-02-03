import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {

  public isShown = false;

  constructor() { }

  ngOnInit() {
  }


  public show(): void {
    this.isShown = true;
  }

  public hide(): void {
    this.isShown = false;
  }

}
