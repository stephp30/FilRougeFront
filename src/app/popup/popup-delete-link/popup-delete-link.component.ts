import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Vehicule } from '../../core/model';
import { VehiculeService } from '../../core/api/vehicule.service';
import { NgForm } from '@angular/forms';
import { TableVehiculeComponent } from '../../tables/table-vehicule/table-vehicule.component';

@Component({
  selector: 'app-popup-delete-link',
  templateUrl: './popup-delete-link.component.html',
  styleUrls: ['./popup-delete-link.component.css']
})
export class PopupDeleteLinkComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<PopupDeleteLinkComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private vehiculeService: VehiculeService) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  deleteLink() {
    this.vehiculeService.deleteVehiculeLink(this.data).subscribe();
    this.close();
  }
}
