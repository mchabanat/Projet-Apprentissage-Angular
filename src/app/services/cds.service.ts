import { Injectable } from '@angular/core';
import { CD } from 'src/models/cd';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map,switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // une seule instance de CdsService est créée et partagée par tous les composants qui l'utilisent.
})
export class CdsService {

  constructor(private http: HttpClient) {  }

  getAllCds(): Observable<CD[]> {
    return this.http.get<CD[]>('http://localhost:3000/CD')
  }

  getCdById(id: number): Observable<CD> {
    const cd = this.http.get<CD>('http://localhost:3000/CD/'+id)

    // On verifie que le cd existe
    if (cd) {
      return cd;
    }
    throw new Error('CD introuvable');
  }
}
