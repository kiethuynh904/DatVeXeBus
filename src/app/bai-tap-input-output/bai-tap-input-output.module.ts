import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapInputOutputComponent } from './bai-tap-input-output.component';
import { BaitapHeaderComponent } from './baitap-header/baitap-header.component';
import { BaitapCarouselComponent } from './baitap-carousel/baitap-carousel.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ContentItem1Component } from './content/content-item1/content-item1.component';
import { ContentItem2Component } from './content/content-item2/content-item2.component';

@NgModule({
  declarations: [BaiTapInputOutputComponent, BaitapHeaderComponent, BaitapCarouselComponent, ContentComponent, FooterComponent, ContentItem1Component, ContentItem2Component],
  imports: [
    CommonModule
  ],
  exports:[
    BaiTapInputOutputComponent, BaitapHeaderComponent, BaitapCarouselComponent, ContentComponent, FooterComponent, ContentItem1Component, ContentItem2Component,
  ]
})
export class BaiTapInputOutputModule { }
