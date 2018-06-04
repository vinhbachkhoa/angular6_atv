import { Component, OnInit } from '@angular/core';
import { Issue } from '../share/issue-model';
import { IssueService } from '../share/issue.service';

@Component({
  selector: 'app-list-issues',
  templateUrl: './list-issues.component.html',
  styleUrls: ['./list-issues.component.css']
})
export class ListIssuesComponent implements OnInit {

  issueList: Issue[];
  constructor(
    private issueService: IssueService
  ) { }

  ngOnInit() {
    var x = this.issueService.getData();
    x.snapshotChanges().subscribe(issues => {
      this.issueList = [];
      issues.forEach(contact => {
        var y = contact.payload.toJSON();
        y["key"] = contact.key;
        this.issueList.push(y as Issue);
      });
    });
    this.getIssueList();
  }

  getIssueList(){
    var x = this.issueService.getIssueList();
    x.snapshotChanges().subscribe(list=>{
      list.map(li=>{
        var issue =  ({ key: li.payload.key, ...li.payload.val() })
        this.issueList.push(issue);
      })
    })
  }
}
