import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {
@Input() ghe:any;
@Output() EventChonGhe = new EventEmitter();
public gheDangChon:boolean = false;
  constructor() { }
  clickChon(){
    this.gheDangChon = !this.gheDangChon;
    this.EventChonGhe.emit(this.gheDangChon);
  }
  ngOnInit() {
  }

}
