import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CD } from '../../models/cd';
import { CdsService } from '../services/cds.service';

@Component({
  selector: 'app-list-cds',
  templateUrl: './list-cds.component.html',
  styleUrls: ['./list-cds.component.scss']
})
export class ListCDsComponent implements OnInit {
  listcd$!: Observable<CD[]>;

  constructor(private myCDservices: CdsService) { }

  ngOnInit(): void { // ngOnInit() est une méthode de cycle de vie d'Angular. Elle sert a initialiser les données du composant.
    this.listcd$ = this.myCDservices.getAllCds();
  }
}
