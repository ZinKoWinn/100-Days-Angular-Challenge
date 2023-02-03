import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  public redirectCount = 10;

  constructor(private router: Router) { }

  ngOnInit() {
    setInterval(() => {
      this.redirectCount--;
      if (this.redirectCount <= 0) {
        setTimeout(() => {
          this.router.navigate(['']);
        }, 1000);
      }
    }, 1000);
  }

  public get redirectMessage(): string {
    if (this.redirectCount <= 0) {
      return 'Redirecting ...';
    }

    return `Redirecting you to home page in ${this.redirectCount}.`;
  }

}
