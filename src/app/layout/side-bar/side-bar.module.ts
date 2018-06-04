import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../../component/home/home.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    HomeModule
  ],
  declarations: [
    SideBarComponent
  ],
  exports: [SideBarComponent]
})
export class SideBarModule { }
