import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent implements OnInit {
  public isShown = false;

  constructor(private viewPointScroller: ViewportScroller) { }

  ngOnInit() {
  }

  @HostListener('window:scroll') onWindowScroll(): void {
    const yCoordinate = this.viewPointScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 400;
  }

  public goToTop(): void {
    this.viewPointScroller.scrollToPosition([0, 0]);
  }

}
