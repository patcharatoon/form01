import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  // user จะส่งไปให้ detail

  onChange(user: User){
    this.user = user;
  }
}
