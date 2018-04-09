import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '../../core/api/case.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-table-weapon',
  templateUrl: './table-weapon.component.html',
  styleUrls: ['./table-weapon.component.css']
})
export class TableWeaponComponent implements OnInit {
  weaponColumns = ['type', 'modele', 'createDate', 'updateDate', 'edit', 'delete'];
  weaponSource;
  errText: string;

  constructor(private route: ActivatedRoute, private caseService: CaseService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.caseService.getCase(id).subscribe(
      data => this.weaponSource = new MatTableDataSource(data.weapon),
      err => this.errText = 'La requête a échouée'
    );
  }
  // ouverture du popup avec le contenu de la ligne en paramètre
  dialogEdit(row) {
    // this.popupService.openEditVehicule(row);
  }

  dialogDeleteLink(row) {
    // this.popupService.openDLinkVehicule(row);
  }

}
