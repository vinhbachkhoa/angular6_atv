import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { IssueModule } from './issue/issue.module';
import { IssueComponent } from './issue/issue.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule,
    IssueModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
