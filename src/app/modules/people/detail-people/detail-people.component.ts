import { Component, OnInit } from '@angular/core';
import { People } from '../../../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../../core/api/people.service';
import { CaseService } from '../../../core/api/case.service';

@Component({
  selector: 'app-detail-people',
  templateUrl: './detail-people.component.html',
  styleUrls: ['./detail-people.component.css']
})
export class DetailPeopleComponent implements OnInit {

  id: number;
  people: People;
  errText: string;
  title = {
    'text-align': 'center'
  };

  constructor(private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router) {
  }

  ngOnInit() {
    // récupération de l'ID dans l'uri
    this.id = +this.route.snapshot.paramMap.get('id');
    // récupération de l'objet people
    this.peopleService.getPeople(this.id).subscribe(
      data => this.people = data,
      error => this.errText = 'la requête a échouée');
  }


  // retour au tableau des people
  backToList() {
    this.router.navigate(['../'], { relativeTo: this.route });

  }

  // suppression des peoples
  delete() {
    this.peopleService.deletePeople(this.id).subscribe(() =>
      this.router.navigate(['../'], { relativeTo: this.route }));
  }

}
