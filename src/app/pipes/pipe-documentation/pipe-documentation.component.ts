import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-documentation',
  templateUrl: './pipe-documentation.component.html',
  styleUrls: ['./pipe-documentation.component.scss']
})
export class PipeDocumentationComponent implements OnInit {
  public searchFilterTerm = '';
  public flattenData = [1, 2, [3], [4, [5, 6, [7]]]];

  public html = '<a href="https://www.YouTube.com/Codingtutorials360" target="blank">YouTube </a>';

  public stringArray = ['Course', 'Lined In', 'Twitter', 'YouTube'];
  public objectArray: { [key: string]: string; }[] = [
    { content: 'Course' },
    { content: 'Lined In' },
    { content: 'Twitter' },
    { content: 'YouTube' },
  ];
  constructor() { }

  ngOnInit() {
  }

  public modifyFlattenData(): void {
    this.flattenData.push(3, 5);
  }

  public reassignFlattenData(): void {
    this.flattenData = [...this.flattenData];
  }

}
