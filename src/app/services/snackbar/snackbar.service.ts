import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor() { }

  public snackBar$ = new Subject<string>();

  public callSnackBar(message: string) {
    this.snackBar$.next(message);
  }
}
