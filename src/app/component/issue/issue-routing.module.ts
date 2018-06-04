import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { ListIssuesComponent } from './list-issues/list-issues.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';

const routes: Routes = [
  { path: 'detail/:key', component: IssueDetailComponent },
  { path: 'list-issue', component: ListIssuesComponent },
  { path: 'create-issue', component: CreateIssueComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class IssueRoutingModule { }
