import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-popup-delete-link-people',
  templateUrl: './popup-delete-link-people.component.html',
  styleUrls: ['./popup-delete-link-people.component.css']
})
export class PopupDeleteLinkPeopleComponent implements OnInit {

  ngOnInit(): void {}

  constructor(public dialogRef: MatDialogRef<PopupDeleteLinkPeopleComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
