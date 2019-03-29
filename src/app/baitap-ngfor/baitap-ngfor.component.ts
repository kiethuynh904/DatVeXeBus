import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-baitap-ngfor',
  templateUrl: './baitap-ngfor.component.html',
  styleUrls: ['./baitap-ngfor.component.scss']
})
export class BaitapNgforComponent implements OnInit {
  public danhSachSanPham: any[] = [
    { MaSP: 1, TenSP: "Sony XZ", GiaSP: 1000 },
    { MaSP: 2, TenSP: "Sony XZ2", GiaSP: 1000 },
    { MaSP: 3, TenSP: "HTC Ultra", GiaSP: 1000 },
    { MaSP: 4, TenSP: "HTC U 12Plus", GiaSP: 1000 },
    { MaSP: 5, TenSP: "iPhone XS MAX", GiaSP: 9000 },
    { MaSP: 6, TenSP: "Samsung S9", GiaSP: 8000 },
  ];

  constructor() {
  }
  XoaThongTin(ma) {
    let i = 0
    for (let item of this.danhSachSanPham) {
      if (ma == item.MaSP) {
        this.danhSachSanPham.splice(i, 1);
      }
      i++;
    }
  }
  LayThongTin(maSP, tenSP, giaSP) {
    let sanpham = {
      MaSP: maSP,
      TenSP: tenSP,
      GiaSP: giaSP
    }
    this.danhSachSanPham.push(sanpham);
    console.log(this.danhSachSanPham);
  }
  ngOnInit() {
  }

}
