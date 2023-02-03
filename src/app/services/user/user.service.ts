import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AUserService } from './a-user.service';
import { User } from './user.modal';

@Injectable({
  providedIn: 'root'
})
export class UserService implements AUserService {

  private readonly baseRoute = 'https://jsonplaceholder.typicode.com/users';

  constructor(public http: HttpClient) { }

  public getUserById(id: number): Observable<User> {
    return this.http.get(`${this.baseRoute}/${id}`).pipe(
      map((value) => new User(value))
    );
  }
}
