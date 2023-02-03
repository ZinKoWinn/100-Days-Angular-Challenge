import { Component, Input, OnInit } from '@angular/core';
import { fadeInOutAnimation } from '../../other/animations/fade-in-out/fade-in-out.animation';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrls: ['./simple-popup.component.scss'],
  animations: [fadeInOutAnimation]
})
export class SimplePopupComponent implements OnInit {
  @Input() public message = '';
  public isShown = false;

  constructor() { }

  ngOnInit() {
  }

  public show() {
    this.isShown = !this.isShown;
    const subscription = of(null).pipe(delay(3000)).subscribe({
      complete: () => {
        this.isShown = !this.isShown;
        subscription.unsubscribe();
      }
    });
  }

}
