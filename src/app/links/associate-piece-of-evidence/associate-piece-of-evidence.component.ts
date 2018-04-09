import { Component, OnInit } from '@angular/core';
import { PieceOfEvidence } from '../../core/model';
import { PopupAssociateComponent } from '../../popup/popup-associate/popup-associate.component';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { CaseService } from '../../core/api/case.service';


@Component({
  selector: 'app-associate-piece-of-evidence',
  templateUrl: './associate-piece-of-evidence.component.html',
  styleUrls: ['./associate-piece-of-evidence.component.css']
})
export class AssociatePieceOfEvidenceComponent implements OnInit {
  poe: PieceOfEvidence;

  constructor(
    public dialogRef: MatDialogRef<PopupAssociateComponent>,
    private caseService: CaseService) {}

  ngOnInit() {
    this.poe = {
      createDate: null,
    updateDate: null,
    type: '',
    serialNumber: '' };
    }

    onSubmit(ngForm: NgForm) {
      // this.data.push(ngForm);
      // this.caseService.updateCase(this.data);
      this.dialogRef.close();
    }
}
