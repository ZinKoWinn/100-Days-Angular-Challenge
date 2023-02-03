import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent implements OnInit {
  @Input() public baseHref = 'https://zinkowinn.github.io';
  @Input() public hashTags: string[] = ['ZinKoWinn', 'JavaScript', 'TypeScript', 'Angular', '100', 'AngularChallenge'];

  constructor(public titleService: Title) { }

  ngOnInit() {
  }

  public get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const messsge = encodeURIComponent(`Check out ${this.titleService.getTitle()}.`);
    return `${base}${messsge}`;
  }

  private getBaseWithHashTagsAndRoute(): string {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');
    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&related=zinkowin&url=${route}&text=`;
  }
}
