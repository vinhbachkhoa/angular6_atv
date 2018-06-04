import { Injectable } from '@angular/core';
import { Issue } from './issue-model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

@Injectable()
export class IssueService {

  private dbPath: string = '/issues';
  selectedIssue: Issue = new Issue();
  issue: AngularFireObject<Issue> = null;
  issues: AngularFireList<Issue>;

  constructor(private firebase: AngularFireDatabase) { 
    this.issues = this.firebase.list('issues');
  }

  getData() {
    this.issues = this.firebase.list('issues');
    return this.issues;
  }

  getIssue(key: string): AngularFireObject<Issue> {
    this.issue = this.firebase.object(`${this.dbPath}/${key}`);
    return this.issue;
  }

  insertIssue(issue: Issue) {
    this.issues.push(issue);
  }

  updateIssue(key: string, value: any): void {
    this.issues.update(key, value)
      .catch(error => this.handleError(error));
  }

  deleteIssue(key: string) {
    this.issues.remove(key)
      .catch(error => this.handleError(error)
      );
  }

  getIssueList(): AngularFireList<Issue> {
    return this.issues;
  }

  findIssue(start, end): AngularFireList<any> {
    return this.firebase.list(this.dbPath, ref => {
      let q = ref
        .orderByChild('name')
        .limitToFirst(6)
        .startAt(start)
        .endAt(end)
      return q;
    });
  }

  private handleError(error) {
    console.log(error);
  }

}
