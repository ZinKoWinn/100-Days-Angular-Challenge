import { Component, OnInit } from '@angular/core';
import { fadeInOutAnimation } from '../animations/fade-in-out/fade-in-out.animation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormDirty } from '../guards/form-dirty/form-dirty.interface';
import { slideRightAnimation } from '../animations/slide-right/slide-right.animation';

@Component({
  selector: 'app-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrls: ['./other-documentation.component.scss'],
  animations: [fadeInOutAnimation, slideRightAnimation]
})
export class OtherDocumentationComponent implements OnInit, IFormDirty {

  public isDOMIn = true;
  public form: FormGroup;

  public tabs: { title: string, active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];
  public selectedTab = 0;

  constructor(private formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
  }

  public submit(): void {
    this.form.reset(this.form.value);
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

}
