import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../share/issue-model';
import { IssueService } from '../share/issue.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  @Input() issue: Issue;
  isShowEdit = false;
  constructor(
    private issueService: IssueService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getIssue();
  }

  getIssue(): void {
    const key = this.route.snapshot.paramMap.get('key');
    this.issueService.getIssue(key).valueChanges()
      .subscribe(issue => {
        var y = issue;
        y["key"] = key;
        this.issue = y;
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.issueService.updateIssue(this.issue.key + "", {
      title: this.issue.title,
      cause: this.issue.cause,
      solution: this.issue.solution,
      status: this.issue.status,
      note: this.issue.note
    })
    // this.tostr.success('Updated Succcessfully', 'Hello ' + this.contact.name, {
    //   closeButton: true,
    //   timeOut: 3000
    // });
  }
}
