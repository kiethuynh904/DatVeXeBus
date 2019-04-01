import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-content-item2',
  templateUrl: './content-item2.component.html',
  styleUrls: ['./content-item2.component.scss']
})

export class ContentItem2Component implements OnInit {
@Input() laptop:any;
  constructor() { }

  ngOnInit() {
  }

}
