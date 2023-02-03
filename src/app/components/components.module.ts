import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AccordionComponent } from './accordion/accordion.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { COMPONENTS_ROUTES } from './componetnts.routes';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CounterComponent } from './counter/counter.component';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { FieldSetComponent } from './field-set/field-set.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';
import { LoaderComponent } from './loader/loader.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PagingComponent } from './paging/paging.component';
import { PasswordComponent } from './password/password.component';
import { PillFiltersComponent } from './pill-filters/pill-filters.component';
import { PillComponent } from './pill/pill.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { QuoteComponent } from './quote/quote.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { RichTextViewerComponent } from './rich-text-viewer/rich-text-viewer.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';

@NgModule({
    declarations: [
        ComponentDocumentationComponent,
        AccordionComponent,
        ProgressBarComponent,
        StarRatingsComponent,
        LoaderComponent,
        CreditCardInputComponent,
        TwitterPostComponent,
        LinkedinPostComponent,
        QuoteComponent,
        RichTextViewerComponent,
        ToggleComponent,
        DebounceSearchComponent,
        SearchListComponent,
        CounterComponent,
        SimpleTableComponent,
        PagingComponent,
        SortTableComponent,
        EmailFormComponent,
        RibbonComponent,
        ButtonToggleComponent,
        CountdownTimerComponent,
        SimplePopupComponent,
        SkeletonLoaderComponent,
        SocialMediaBarComponent,
        BottomSheetComponent,
        FieldSetComponent,
        PillComponent,
        PillFiltersComponent,
        PasswordComponent,
        OverlayComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        RouterModule.forChild(COMPONENTS_ROUTES)
    ]
})
export class ComponentsModule {

}
