import { Component, OnInit, Inject } from '@angular/core';
import { PoeService } from '../../core/api/poe.service';
import { VehiculeService } from '../../core/api/vehicule.service';
import { WeaponService } from '../../core/api/weapon.service';
import { Vehicule, Weapon, PieceOfEvidence, Case, People } from '../../core/model';
import { CaseService } from '../../core/api/case.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { PeopleService } from '../../core/api/people.service';
import { NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popup-associate',
  templateUrl: './popup-associate.component.html',
  styleUrls: ['./popup-associate.component.css']
})
export class PopupAssociateComponent implements OnInit {
  sections = ['Pièces à conviction', 'Armes', 'Véhicules', 'Personnes'];
  selectedSection;
  selectedPieceOfEvidence;
  selectedWeapon;
  selectedVehicule;
  selectedPeople;
  vehicules: Vehicule[];
  weapons: Weapon[];
  peoples: People[];
  convictions: PieceOfEvidence[];
  policeCase: Case;
  reponse: Response;
  dialog: MatDialog;

  constructor(
    private vehiculeService: VehiculeService,
    private weaponService: WeaponService,
    private poeService: PoeService,
    private caseService: CaseService,
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.vehiculeService.getVehicules().subscribe(
      data => this.vehicules = data);
    this.weaponService.getWeapons().subscribe(
      data => this.weapons = data);
    this.poeService.getPieceOfEvidences().subscribe(
      data => this.convictions = data);
    this.policeCase = this.data;
    this.peopleService.getPeoples().subscribe(
      data => this.peoples = data);

  }

  associatePoe(item) {
    this.data.push(item);
    this.caseService.updateCase(this.data);
  }
  associateWeapon(item) {
    this.data.push(item);
    this.caseService.updateCase(this.data);
  }
  associateVehicule(item) {
    this.policeCase.vehicule.push(item);
    this.caseService.updateCase(this.policeCase).subscribe();
    this.caseService.getCases().subscribe();
  }
  associatePeople(item) {
    this.policeCase.people.push(item);
    this.caseService.updateCase(this.policeCase).subscribe();
    this.router.navigate(['../']);

  }
}
