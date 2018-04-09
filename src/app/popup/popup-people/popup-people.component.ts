import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { People } from '../../core/model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-popup-people',
  templateUrl: './popup-people.component.html',
  styleUrls: ['./popup-people.component.css']
})
export class PopupPeopleComponent implements OnInit {
  people;

  // injection du contenu de la ligne sélectionnée(data)
  constructor(
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.people = this.data;
  }



}
