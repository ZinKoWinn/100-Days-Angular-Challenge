import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-cut-out',
  templateUrl: './banner-cut-out.component.html',
  styleUrls: ['./banner-cut-out.component.scss']
})
export class BannerCutOutComponent implements OnInit {

  @Input() public imageUrl = 'assets/images/banner.jpg';
  @Input() public title = '100 Angualr Challenge';

  constructor() { }

  ngOnInit() {
  }

}
