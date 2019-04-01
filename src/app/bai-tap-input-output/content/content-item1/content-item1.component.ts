import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-item1',
  templateUrl: './content-item1.component.html',
  styleUrls: ['./content-item1.component.scss']
})
export class ContentItem1Component implements OnInit {
@Input() phone:any;
@Output() EventChiTiet = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  detail(content) {
    this.EventChiTiet.emit(content);
  }
}
