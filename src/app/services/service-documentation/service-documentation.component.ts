import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { AUserService } from '../user/a-user.service';
import { User } from '../user/user.modal';

@Component({
  selector: 'app-service-documentation',
  templateUrl: './service-documentation.component.html',
  styleUrls: ['./service-documentation.component.scss']
})
export class ServiceDocumentationComponent implements OnInit {
  public user = new User();
  public userIdExample = new User();
  public state: { [key: string]: any } = {};

  constructor(
    public userService: AUserService,
    public snackBarService: SnackbarService,
    public localStorageService: LocalStorageService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.localStorageService.state$.subscribe((data) => {
      this.state = data;
    });

    this.route.params.pipe(
      map((param) => param.id),
      mergeMap((id) => this.userService.getUserById(id))).subscribe({
        next: (value) => {
          this.userIdExample = value;
        }
      });

    this.userService.getUserById(1).subscribe({
      next: (response: any) => {
        this.user = response;
        console.log(this.user);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Done');
      }
    });
  }

  public callSnackBar(): void {
    this.snackBarService.callSnackBar('Sanckbar Service Example');
  }

  public updateState(): void {
    this.localStorageService.setState('name', 'Zin Ko Winn');
  }

}
