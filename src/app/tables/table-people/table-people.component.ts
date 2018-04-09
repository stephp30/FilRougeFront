import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { PeopleService } from '../../core/api/people.service';
import { Case, People } from '../../core/model';
import { PopupService } from '../../core/popup.service';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '../../core/api/case.service';
import { PopupDeleteLinkPeopleComponent } from '../../popup/popup-delete-link-people/popup-delete-link-people.component';

@Component({
  selector: 'app-table-people',
  templateUrl: './table-people.component.html',
  styleUrls: ['./table-people.component.css']
})
export class TablePeopleComponent implements OnInit {

  id: number;
  errText: string;
  peopleColumns = ['firstName', 'lastName', 'nickName', 'skinColor', 'eyeColor', 'size', 'weight', 'edit', 'delete'];
  policeCase: Case;
  people: People;
  peoples: People[];
  peopleSource;
  data: any;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public popupService: PopupService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private caseService: CaseService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.id = +params.get('id'));
    this.caseService.getCase(this.id).subscribe(
      data => this.peopleSource = new MatTableDataSource(data.people),
      err => this.errText = 'la requête a échouée'
    );
  }


  // ouverture du popup avec le contenu de la ligne en paramètre
  dialogEdit(row) {
    this.popupService.openEditPeople(row);
  }

  getPersonne() {
    this.caseService.getCase(this.id).subscribe(affaire => {
      this.peoples = affaire.people;
      this.peopleSource = new MatTableDataSource<People>(this.peoples);
      this.peopleSource.sort = this.sort;
    });
  }

  deletePersonne(idPersonne) {
    this.peopleService.deleteLinkPersonne(this.id, idPersonne).subscribe(() => {
      this.getPersonne();
    });
  }

  openDeleteDialog(idPersonne): void {
    const dialogRef = this.dialog.open(PopupDeleteLinkPeopleComponent, { width: '250px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletePersonne(idPersonne);
      }
    });
  }


}
