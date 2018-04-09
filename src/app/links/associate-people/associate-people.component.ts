import { Component, OnInit, Input } from '@angular/core';
import { People, Case } from '../../core/model';
import { MatDialogRef } from '@angular/material';
import { PopupAssociateComponent } from '../../popup/popup-associate/popup-associate.component';
import { CaseService } from '../../core/api/case.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-associate-people',
  templateUrl: './associate-people.component.html',
  styleUrls: ['./associate-people.component.css']
})
export class AssociatePeopleComponent implements OnInit {

  people: People;

  @Input() policeCase: Case;
  constructor(
    public dialogRef: MatDialogRef<PopupAssociateComponent>,
    private caseService: CaseService) { }

  ngOnInit() {
    this.people = {
      firstName: '',
      lastName: '',
      nickName: '',
      eyeColor: '',
      size: null,
      weight: null,
      skinColor: '',
    };
  }

  onSubmit(ngForm: NgForm) {
    this.policeCase.people.push(ngForm.value);
    this.caseService.updateCase(this.policeCase).subscribe();
    this.dialogRef.close();

  }
}

