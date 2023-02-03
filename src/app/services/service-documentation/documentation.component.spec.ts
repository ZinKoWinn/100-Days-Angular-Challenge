import { AUserService } from '../user/a-user.service';
import { UserServiceMock } from '../user/user.service.mock';
import { ServiceDocumentationComponent } from './service-documentation.component';


describe(ServiceDocumentationComponent.name, () => {

    describe('General', () => {
        let service: ServiceDocumentationComponent;
        let userService: AUserService;

        beforeEach(() => {
            userService = new UserServiceMock();
            service = new ServiceDocumentationComponent(userService, null, null, null);
        });
    });
});