import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { SharedModule } from '../shared/shared.module';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';
import { FlattenPipe } from './flatten/flatten.pipe';
import { FormsModule } from '@angular/forms';
import { RichTextPipe } from './rick-text/rich-text.pipe';
import { SortByPipe } from './sort-by/sort-by.pipe';
import { SortByKeyPipe } from './sort-by-key/sort-by-key.pipe';

@NgModule({
  declarations: [
    PipeDocumentationComponent,
    TruncatePipe,
    CreditCardFormatterPipe,
    FlattenPipe,
    RichTextPipe,
    SortByPipe,
    SortByKeyPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(PIPES_ROUTES)
  ]
})
export class PipesModule {

}
