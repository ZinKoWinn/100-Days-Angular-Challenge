import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss']
})
export class SortTableComponent implements OnInit {

  @Input() public tableData: any[] = [
    { first: 'Zin Ko Winn1', dob: '25/01/2002', age: 20, living: true },
    { first: 'Zin Ko Winn2', dob: '25/01/2003', age: 19, living: false },
    { first: 'Zin Ko Winn3', dob: '25/01/2004', age: 18, living: true },
    { first: 'Zin Ko Winn4', dob: '25/01/2005', age: 17, living: false },
    { first: 'Zin Ko Winn5', dob: '25/01/2006', age: 16, living: true },
  ];

  public sortDirection = true;

  constructor() { }

  ngOnInit() {
  }

  public sort(headerData: { key: string, value: any }): void {
    console.log(headerData);
    const { key, value } = headerData;
    this.sortDirection = !this.sortDirection;
    switch (true) {
      case typeof value === 'boolean':
        console.log('value ', value);
        this.sortBoolean(key);
        break;
      case typeof value === 'number':
        this.sortNumber(key);
        break;
      case this.isDate(value):
        this.sortDate(key);
        break;
      case typeof value === 'string':
        this.sortString(key);
        break;
    }

  }

  private sortBoolean(key: any): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key]) - Number(value2[key]);
      } else {
        return Number(value2[key]) - Number(value1[key]);
      }
    });
  }

  private sortNumber(key: any): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key]) - Number(value2[key]);
      } else {
        return Number(value2[key]) - Number(value1[key]);
      }
    });
  }

  private sortString(key: any): void {
    this.tableData.sort((value1: string, value2: string) => {
      const value1UpperCased = value1[key].toUpperCase();
      const value2UpperCased = value2[key].toUpperCase();
      if (this.sortDirection) {
        if (value1UpperCased > value2UpperCased) {
          return -1;
        }

        if (value2UpperCased > value1UpperCased) {
          return 1;
        }

        return 0;
      } else {
        if (value2UpperCased > value1UpperCased) {
          return -1;
        }

        if (value1UpperCased > value2UpperCased) {
          return 1;
        }

        return 0;
      }
    });
  }

  private isDate(value: any): boolean {
    const parsedDate = Date.parse(value);
    return !isNaN(value) && !isNaN(parsedDate);
  }

  private sortDate(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return new Date(value1[key]).getTime() - new Date(value2[key]).getTime();
      } else {
        return new Date(value2[key]).getTime() - new Date(value1[key]).getTime();
      }
    });
  }
}
