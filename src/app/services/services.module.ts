import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LocalStorageService } from './local-storage.service';
import { ServiceDocumentationComponent } from './service-documentation/service-documentation.component';
import { SERVICES_ROUTES } from './services.routes';
import { AUserService } from './user/a-user.service';
import { UserService } from './user/user.service';

@NgModule(
    {
        declarations: [
            ServiceDocumentationComponent
        ],
        imports: [
            CommonModule,
            SharedModule,
            HttpClientModule,
            RouterModule.forChild(SERVICES_ROUTES)
        ],
        providers: [
            UserService,
            LocalStorageService,
            { provide: 'LocalStorage', useValue: window.localStorage },
            { provide: AUserService, useClass: UserService }
        ]
    }
)
export class ServicesModule {

}
