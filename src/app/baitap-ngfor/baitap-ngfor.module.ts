import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapNgforComponent } from './baitap-ngfor.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [BaitapNgforComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
  ],
  exports:[
    BaitapNgforComponent
  ]
})
export class BaitapNgforModule { }
