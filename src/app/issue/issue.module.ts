import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueService } from './share/issue.service';
import { IssueRoutingModule } from './/issue-routing.module';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { ListIssuesComponent } from './list-issues/list-issues.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueComponent } from './issue.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    IssueRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    CreateIssueComponent,
    ListIssuesComponent,
    IssueDetailComponent 
  ],
  providers: [IssueService],
})
export class IssueModule { }
