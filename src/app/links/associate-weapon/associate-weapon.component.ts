import { Component, OnInit } from '@angular/core';
import { PopupAssociateComponent } from '../../popup/popup-associate/popup-associate.component';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Weapon } from '../../core/model';


@Component({
  selector: 'app-associate-weapon',
  templateUrl: './associate-weapon.component.html',
  styleUrls: ['./associate-weapon.component.css']
})
export class AssociateWeaponComponent implements OnInit {
  weapon: Weapon;

  constructor(public dialogRef: MatDialogRef<PopupAssociateComponent>) {}

  ngOnInit() {
    this.weapon = {
      type: '',
      modele: '',
      createDate: null,
      updateDate: null };
    }

    onSubmit(ngForm: NgForm) {
      // this.affaire.onSubmit(ngForm, this.data);
      this.dialogRef.close();
    }
}
