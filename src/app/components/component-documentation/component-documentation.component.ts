import { Component, OnInit, ViewChild } from '@angular/core';
import { AccordionItem } from '../accordion/accordion.item.interface';
import { LoaderType } from '../loader/models/loader-types.enum';
import { RibbonType } from '../ribbon/ribbon-type';
import { RibbonLocation } from '../ribbon/ribbon-location';
import { ButtonMeta } from '../button-toggle/button-meta.modal';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SocialMediaIcon } from '../social-media-bar/social-media.icon.interface';
import { SocialMedia } from '../social-media-bar/social-media.enum';
import { PillType } from '../pill/pill-type.enum';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent implements OnInit {

  @ViewChild(SnackbarComponent, { static: false }) public snackBar: SnackbarComponent;
  public accordionItems: AccordionItem[] = [

    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false
    },

    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false
    }

  ];

  public progressValue = 25;
  public ratingValue = 3.5;
  public isLoading = false;
  public loaderType: LoaderType = LoaderType.Circular;
  public LoaderType = LoaderType;
  public isOnValue = false;

  public tabs: { title: string, active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];
  public selectedTab = 0;

  public RibbonType = RibbonType;
  public RibbonLocation = RibbonLocation;
  public ribbonStyle = { type: RibbonType.Success, location: RibbonLocation.TopRight };

  public buttonToggleOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Itlaic' }),
    new ButtonMeta({ id: 3, title: 'Underline' })
  ];

  public ribbonTypeOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: RibbonType.Info }),
    new ButtonMeta({ id: 2, title: RibbonType.Success }),
    new ButtonMeta({ id: 3, title: RibbonType.Error }),
    new ButtonMeta({ id: 4, title: RibbonType.Warning })
  ];

  public ribbonLocationOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: RibbonLocation.TopRight }),
    new ButtonMeta({ id: 2, title: RibbonLocation.TopLeft }),
    new ButtonMeta({ id: 3, title: RibbonLocation.BottomRight }),
    new ButtonMeta({ id: 4, title: RibbonLocation.BottomLeft })
  ];

  public loaded = false;

  public socialMedia: SocialMediaIcon[] = [
    {
      href: '',
      type: SocialMedia.Facebook
    },
    {
      href: '',
      type: SocialMedia.Instagram
    },

    {
      href: '',
      type: SocialMedia.LinkedIn
    },
    {
      href: '',
      type: SocialMedia.Twitter
    },
    {
      href: '',
      type: SocialMedia.Youtube
    },
  ];

  public PillType = PillType;

  public isShown = false;

  constructor() { }

  ngOnInit() {
  }

  public increase(): void {
    if (this.progressValue >= 100) {
      this.progressValue = 100;
    } else {
      this.progressValue += 25;
    }
  }

  public decrease(): void {
    if (this.progressValue <= 0) {
      this.progressValue = 0;
    } else {
      this.progressValue -= 25;
    }
  }

  public startLoading(): void {
    this.isLoading = true;
  }

  public stopLoading(value: boolean): void {
    this.isLoading = value;
  }

  public toggleOnChange(value: boolean): void {
    this.isOnValue = value;
  }

  public debounceSearchSample(search: string): void {
    console.log(search);
  }

  public snackBarShow(): void {
    this.snackBar.showMessage('100 days Angular Challenge');
  }
}
