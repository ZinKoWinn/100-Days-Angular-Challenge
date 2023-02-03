import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { LoaderType } from './models/loader-types.enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnChanges {
  @Input() public isLoading = false;
  @Input() public loaderType: LoaderType = LoaderType.Circular;
  @Output() public StopLoading = new EventEmitter<boolean>();
  public LoaderType = LoaderType;
  private loading = 'Loading';
  private loaderPeriods = '.';
  public get loadingtext(): string {
    return `${this.loading}${this.loaderPeriods}`;
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.loaderType === LoaderType.Loading) {
      this.updateLoaderPeriods();
    }
  }

  public stopLoading(): void {
    this.isLoading = false;
    this.StopLoading.emit(this.isLoading);
  }

  private updateLoaderPeriods(): void {
    let currentState = 0;
    setInterval(() => {
      switch (currentState % 3) {
        case 0:
          this.loaderPeriods = '..';
          currentState++;
          break;
        case 1:
          this.loaderPeriods = '...';
          currentState++;
          break;
        case 2:
          this.loaderPeriods = '.';
          currentState = 0;
          break;
      }
    }, 500);
  }

}
