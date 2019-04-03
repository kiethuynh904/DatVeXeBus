import { Component, OnInit } from '@angular/core';
import {ContentItem1Component} from './content-item1/content-item1.component'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  laptopArray: Array<any> = [
    { name: "MACBOOK", content: "The MacBook is a brand of notebook computers manufactured by Apple Inc", picture: "/assets/img/lt_macbook.png" },
    { name: "ASUS ROG", content: "the Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices", picture: "/assets/img/lt_rog.png" },
    { name: "HP OMEN", content: "A young global smartphone brand focusing on introducing perfect sound quality", picture: "/assets/img/lt_hp.png" },
    { name: "LENOVO THINKPAD", content: "The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012", picture: "/assets/img/lt_lenovo.png" }]
  phoneArray: Array<any> = [
    { name: "iPhone X", content: "iPhone X features a new all-screen design. Face ID, which makes your face your password", picture: "/assets/img/sp_iphoneX.png" },
    { name: "Galaxy Note7", content: "The Galaxy Note7 comes with a perfectly symmetrical design for good reason", picture: "/assets/img/sp_note7.png" },
    { name: "Vivo", content: "A young global smartphone brand focusing on introducing perfect sound quality", picture: "/assets/img/sp_vivo850.png" },
    { name: "Blackberry", content: "BlackBerry is a line of smartphones, tablets, and services originally designed", picture: "/assets/img/sp_blackberry.png" }
  ]
  constructor() { }
  EventChiTietParent(content) {
    console.log(content);
  }
  ngOnInit() {
  }

}
