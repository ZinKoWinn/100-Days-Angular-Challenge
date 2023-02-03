import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';
import { OTHER_ROUTES } from './other.routes';

@NgModule({
    declarations: [
        OtherDocumentationComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(OTHER_ROUTES)
    ]
})
export class OtherModule {

}
