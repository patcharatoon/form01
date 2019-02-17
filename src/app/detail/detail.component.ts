import { Component, OnInit, Input } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() user:User;
  constructor() { }

  ngOnInit() {
  }

}
