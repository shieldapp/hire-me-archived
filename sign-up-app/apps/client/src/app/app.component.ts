import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@sign-up-app/api-interfaces';

@Component({
  selector: 'sign-up-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/users/hello');
  constructor(private http: HttpClient) {}
}
