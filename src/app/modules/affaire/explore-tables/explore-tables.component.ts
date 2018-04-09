import { Component, OnInit } from '@angular/core';
import { CaseService } from '../../../core/api/case.service';

@Component({
  selector: 'app-explore-tables',
  templateUrl: './explore-tables.component.html',
  styleUrls: ['./explore-tables.component.css']
})
export class ExploreTablesComponent implements OnInit {

  constructor( private caseService: CaseService) { }

  ngOnInit() {
  }
}
