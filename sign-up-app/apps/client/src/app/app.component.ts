import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, User } from '@sign-up-app/api-interfaces';

@Component({
  selector: 'sign-up-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  user$ = this.http.get<User>('/api/newuser');
  constructor(private http: HttpClient) {}
}
