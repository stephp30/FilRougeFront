import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Case } from '../../../core/model';
import { CaseService } from '../../../core/api/case.service';

@Component({
  selector: 'app-form-affaire',
  templateUrl: './form-affaire.component.html',
  styleUrls: ['./form-affaire.component.css']
})
export class FormAffaireComponent implements OnInit {
  policeCase: Case;
  editing: boolean;

  constructor(
    private caseService: CaseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // récupération du path
    const urlSegment = this.route.snapshot.url[0];
    console.log(urlSegment.path);
    // mode edit en fonction de l'uri
    if (urlSegment && urlSegment.path === 'affaires') {
      this.editing = true;
      // récupération de l'ID du vehicule
      const id = +this.route.snapshot.paramMap.get('id');
      console.log(id);
      // récupération de l'objet véhicule
      this.caseService.getCase(id).subscribe(
        data => this.policeCase = data);
    } else {
      // mode création
      this.editing = false;
      this.policeCase = {
        date: null,
        name: '',
        description: '',
        pieceOfEvidence: [],
        people: [],
        weapon: [],
        vehicule: [],
        listTag: [],
      };
    }
  }

  // création du véhicule
  onSubmit(form: NgForm) {
    if (this.editing) {
        this.caseService.updateCase(this.policeCase).subscribe();
    } else {
    this.caseService.createAffaire(this.policeCase).subscribe();
    this.router.navigate(['']);
    }
  }
}
