import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CD } from '../../models/cd';
import { CdsService } from '../services/cds.service';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent {
  @Input() leCd!: CD; // @Input permet de dire a Angular que le composant va recevoir des données depuis l'exterieur
  unCd !: CD;  

  constructor(private cdservice:CdsService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    const idcd = this.router.snapshot.params['id'];
    // Je verifie si mon idcd est défini
    if (idcd !== undefined) {
      this.cdservice.getCdById(+idcd).subscribe(cd => this.unCd = cd); // +idcd permet de convertir la chaine de caractere en nombre
    } else {
      this.unCd = this.leCd;
    }
  }

  onAddCd() {
    this.unCd.quantite++;
  }
}
