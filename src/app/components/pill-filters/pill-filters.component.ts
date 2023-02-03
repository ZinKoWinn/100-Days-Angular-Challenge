import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pill-filters',
  templateUrl: './pill-filters.component.html',
  styleUrls: ['./pill-filters.component.scss']
})
export class PillFiltersComponent implements OnInit {
  public pillLabels: string[];
  @Input() public set pills(value: string[]) {
    this.pillLabels = value;
    this.unSelectedPills = value;
  }

  public selectedPills: string[] = [];
  public unSelectedPills: string[] = [];


  constructor() { }

  ngOnInit() {
  }

  public addFilter(pillDetails: { hasBeenSelected: boolean, label: string }): void {
    if (pillDetails.hasBeenSelected) {
      const selectedIndex = this.unSelectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.unSelectedPills.splice(selectedIndex, 1);
      this.selectedPills.push(selectedPill);
    }
  }

  public removeFilter(pillDetails: { hasBeenSelected: boolean, label: string }): void {
    if (!pillDetails.hasBeenSelected) {
      const selectedIndex = this.selectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.selectedPills.splice(selectedIndex, 1);
      this.unSelectedPills.push(selectedPill);
    }
  }

}
