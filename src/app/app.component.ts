import { Component, OnInit } from '@angular/core';
import { Iposts } from './shared/model/posts';
import { postsArr } from './shared/const/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'postcardinput';
  postsData ! : Array<Iposts>

  ngOnInit(): void {
  this.postsData = postsArr;
  }
}
