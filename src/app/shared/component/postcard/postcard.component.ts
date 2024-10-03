import { Component, Input, OnInit } from '@angular/core';
import { Iposts } from '../../model/posts';


@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {
@Input() postobj ! : Iposts;

  constructor() { }

  ngOnInit(): void {
  }

}
