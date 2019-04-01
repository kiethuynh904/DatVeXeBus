import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MyModuleModule} from './my-module/my-module.module';
import {BaitapNgforModule} from './baitap-ngfor/baitap-ngfor.module';
import{BaiTapXeBusModule} from './bai-tap-xe-bus/bai-tap-xe-bus.module';
import {BaiTapInputOutputModule} from './bai-tap-input-output/bai-tap-input-output.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MyModuleModule,
    BaitapNgforModule,
    BaiTapXeBusModule,
    BaiTapInputOutputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
