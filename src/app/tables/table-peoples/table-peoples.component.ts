import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from '../../core/api/people.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-table-peoples',
  templateUrl: './table-peoples.component.html',
  styleUrls: ['./table-peoples.component.css']
})
export class TablePeoplesComponent implements OnInit {

  // tableau des colonnes dutableau affichées
  peopleColumns = ['firstName', 'lastName', 'nickName', 'skinColor', 'eyeColor', 'size', 'weight'];
  // source des informations envoyées dans le tableau
  peopleSource;
  errText: string;

  // Pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    // requête au chargement de la page
    this.peopleService.getPeoples().subscribe(
      cases => {
        this.peopleSource = new MatTableDataSource(cases);
        this.peopleSource.paginator = this.paginator;
        this.peopleSource.sort = this.sort;
      });
  }

  // filtre sur le tableau
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.peopleSource.filter = filterValue;
  }
}
