import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaiTapXeBusComponent } from './bai-tap-xe-bus.component';
import{ItemGheComponent} from './item-ghe/item-ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';

@NgModule({
  declarations: [BaiTapXeBusComponent,ItemGheComponent, DanhSachGheComponent ],
  imports: [
    CommonModule
  ],
  exports:[
    BaiTapXeBusComponent,ItemGheComponent
  ]
})
export class BaiTapXeBusModule { }
