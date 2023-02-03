import { Observable } from 'rxjs';
import { User } from './user.modal';

export abstract class AUserService {
    public abstract getUserById(id: number): Observable<User>;
}