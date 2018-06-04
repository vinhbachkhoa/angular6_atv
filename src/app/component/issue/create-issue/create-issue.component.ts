import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { IssueService } from '../share/issue.service';
import { Issue } from '../share/issue-model';
@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent implements OnInit {
  
  issueList: Issue[];
  @Input() curIssue: Issue;
  constructor(
    private issueService: IssueService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  addIssueToList(addForm: NgForm) {
    this.issueService.insertIssue(this.curIssue);
    this.resetForm(addForm);
  }

  resetForm(addForm?: NgForm) {
    if (addForm != null)
    addForm.reset();
    this.issueService.selectedIssue = {
      key: null,
      title: '',
      cause: '',
      status: 'open',
      solution: '',
      note: ''
    }
  }

  goBack(): void {
    this.location.back();
  }

}
