import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerCutOutComponent } from '../components/banner-cut-out/banner-cut-out.component';
import { CardComponent } from '../components/card/card.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ModalComponent } from '../components/modal/modal.component';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';
import { PascleCasePipe } from '../pipes/pascle-case/pascle-case.pipe';

@NgModule({
    declarations: [
        CardComponent,
        FilterTermPipe,
        PascleCasePipe,
        SnackbarComponent,
        TabsComponent,
        BannerCutOutComponent,
        FooterComponent,
        ModalComponent
    ],
    exports: [
        CardComponent,
        FilterTermPipe,
        PascleCasePipe,
        SnackbarComponent,
        TabsComponent,
        BannerCutOutComponent,
        FooterComponent,
        ModalComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
