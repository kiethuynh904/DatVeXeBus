import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [MyComponentComponent, NavBarComponent,],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MyComponentComponent,
    NavBarComponent,
  ]
})
export class MyModuleModule { }
