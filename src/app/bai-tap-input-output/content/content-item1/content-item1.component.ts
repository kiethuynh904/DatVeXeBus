import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-item1',
  templateUrl: './content-item1.component.html',
  styleUrls: ['./content-item1.component.scss']
})
export class ContentItem1Component implements OnInit {
@Input() Item:any;
@Output() eventChiTiet = new EventEmitter();
public content:any;
public isvalid:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  detail() {
    console.log(this.isvalid)
    // this.content = value;
    // console.log(this.content)
    this.eventChiTiet.emit(this.isvalid)
  }
}
