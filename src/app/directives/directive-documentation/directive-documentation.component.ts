import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-documentation',
  templateUrl: './directive-documentation.component.html',
  styleUrls: ['./directive-documentation.component.scss']
})
export class DirectiveDocumentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public log(): void {
    console.log('100 days Angular Challenges');
  }

}
