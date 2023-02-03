import { Observable, of } from 'rxjs';
import { AUserService } from './a-user.service';
import { User } from './user.modal';

export class UserServiceMock implements AUserService {
    public lastId: number = null;
    public user = new User();

    public getUserById(id: number): Observable<User> {
        this.lastId = id;

        return of(this.user);
    }
}