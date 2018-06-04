import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IssueModule } from './component/issue/issue.module';
import { AppRoutingModule } from './app-routing.module';
import { IssueRoutingModule } from './component/issue/issue-routing.module';
import { HeaderModule } from './layout/header/header.module';
import { FooterModule } from './layout/footer/footer.module';
import { HomeModule } from './component/home/home.module';
import { SideBarModule } from './layout/side-bar/side-bar.module';
import { AuthComponent } from './core/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    IssueModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    SideBarModule,
    AppRoutingModule,
    IssueRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
