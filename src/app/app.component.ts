import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { DetailPieceOfEvidenceComponent } from './modules/piece-of-evidence/detail-piece-of-evidence/detail-piece-of-evidence.component';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: '<app-navigation></app-navigation>'
})
export class AppComponent  {
}
