import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss']
})
export class DebounceSearchComponent implements OnInit {

  @Input() public searchTerm = '';
  @Input() public placeholder = 'Search';
  @Output() public searchUpdate: EventEmitter<string> = new EventEmitter<string>();
  private searchUpdate$: Subject<string> = new Subject<string>();

  constructor() {
    this.searchUpdate$.pipe(
      debounceTime(250),
      distinctUntilChanged()
    ).subscribe(value => {
      this.searchUpdate.emit(value);
    });
  }

  ngOnInit() {
  }

  public updateSearchTerm(searchTerm: string): void {
    this.searchUpdate$.next(searchTerm);
  }

}
