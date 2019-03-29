import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public status: boolean = true;
  public name: string = "cybersoft";
  public password: string = "cybersoft"
  public abc:string = "";
  constructor() {
  }
  KiemTra(thamso1, thamso2) {
    if(thamso1.value == this.name && thamso2.value == this.password)
    {
      this.DangNhap();
    }
    else{
      alert('username or password not valid')
    }
  }
  DangNhap() {
    this.status = false;
  }
  DangXuat() {
    this.status = true;
  }
  ngOnInit() {
  }

}
