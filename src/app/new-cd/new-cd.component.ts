import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CD } from 'src/models/cd';
import { CdsService } from '../services/cds.service';
import { RouterModule, Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrls: ['./new-cd.component.scss']
})
export class NewCDComponent implements OnInit {
  formulaire !: FormGroup
  currentCD$!: Observable<CD> // '$' sert a indiquer que c'est un observable 

  router!: Router;

  constructor(private formBuilder: FormBuilder, private monService: CdsService) { }

  ngOnInit(): void {
    let thumbRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$'); 
    
    this.formulaire = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      author: [null, [Validators.required, Validators.minLength(1)]],
      price: [null, [Validators.required, Validators.min(1)]],
      thumbnail: [null, [Validators.required, Validators.pattern(thumbRegex)]],
      dateDeSortie: [null, [Validators.required, Validators.minLength(3)]],
      quantite: [null, [Validators.required, Validators.min(1)]]
    },
    {
      updateOn: 'blur'
    })

    this.currentCD$ = this.formulaire.valueChanges.pipe(map(formValue => ( 
    {
      id:0,
      title: formValue.title,
      author: formValue.author,
      thumbnail: formValue.thumbnail,
      price: formValue.price,
      dateDeSortie: formValue.dateDeSortie,
      quantite: formValue.quantite
    })))
  }

  onAddCD() {
    let newCD: CD = {
      id: 0,
      title: this.formulaire.get('title')?.value,
      author: this.formulaire.get('author')?.value,
      thumbnail: this.formulaire.get('thumbnail')?.value,
      price: this.formulaire.get('price')?.value,
      dateDeSortie: this.formulaire.get('dateDeSortie')?.value,
      quantite: this.formulaire.get('quantite')?.value
    }

    this.monService.addCd(newCD).pipe(
      tap(() => this.router.navigateByUrl('/catalog'))
    ).subscribe();
  }
}