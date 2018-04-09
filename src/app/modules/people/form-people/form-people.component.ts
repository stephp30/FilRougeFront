import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { People } from '../../../core/model';
import { PeopleService } from '../../../core/api/people.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-people',
  templateUrl: './form-people.component.html',
  styleUrls: ['./form-people.component.css']
})
export class FormPeopleComponent implements OnInit {

  people: People;
  editing: boolean;

  @Input() p: People;

  constructor(private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const urlSegment = this.route.snapshot.url[0];
    // mode étition
    if (urlSegment && urlSegment.path === 'edit') {
      this.people = this.peopleService.selectedPeople;
      this.editing = true;
    } else if (this.p) {
      this.people = this.p;
      this.editing = true;
    } else {
      // mode création
      this.editing = false;
      this.people = {
        firstName: '',
        lastName: '',
        nickName: '',
        eyeColor: '',
        size: null,
        weight: null,
        skinColor: '',
      };
    }
  }

  // création ou mise à jour d'une personne
  onSubmit(form: NgForm) {
    if (this.editing) {
      this.peopleService.updatePeople(this.people).subscribe();
      this.router.navigateByUrl('/affaires/' + this.route.parent.snapshot.paramMap.get('id'));
    } else {
      this.peopleService.createPeople(this.people).subscribe();
      this.router.navigate(['/affaires']);
      this.peopleService.getPeoples().subscribe();
    }
  }
}

