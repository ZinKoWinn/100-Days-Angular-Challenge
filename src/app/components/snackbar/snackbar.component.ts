import { Component, Input, OnInit } from '@angular/core';
import { Subscription, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  @Input() message = '';
  public isShown = false;

  constructor(public snackBarService: SnackbarService) { }

  ngOnInit() {
    this.snackBarService.snackBar$.subscribe((value) => {
      this.showMessage(value);
    });
  }

  public showMessage(message: string): void {
    this.message = message;
    this.isShown = true;
    const subscription = of(null).pipe(delay(2900)).subscribe({
      complete: () => {
        this.isShown = false;
        subscription.unsubscribe();
      }
    });
  }

}
