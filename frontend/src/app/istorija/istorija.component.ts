import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Knjiga } from '../model/knjiga';
import { Korisnik } from '../model/korisnik';
import { Zaduzenje } from '../model/zaduzenje';
import { KnjigaService } from '../service/knjiga.service';
import { KorisnikService } from '../service/korisnik.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-istorija',
  templateUrl: './istorija.component.html',
  styleUrls: ['./istorija.component.css']
})
export class IstorijaComponent implements OnInit {

  constructor(private ruter: Router, private korisnikService: KorisnikService, private knjigaService: KnjigaService) {
  }

  ngOnInit(): void {
    let kor = JSON.parse(localStorage.getItem('ulogovan'));
    
    if (kor) {
      this.korisnikService.dohvatiKorisnika(kor.kor_ime).subscribe((data: Korisnik) => {
        this.korisnik = data;

        for (let i = 0; i < this.korisnik.zaduzenja.length; i++) {
          if (this.korisnik.zaduzenja[i].datumVracanja != "") {
            this.zaduzenja.push(this.korisnik.zaduzenja[i]);

            this.sortedData = this.zaduzenja.slice().sort((a, b) => (
              a.datumVracanja >= b.datumVracanja ? -1 : 1
            ));
          }
        }

        this.knjigaService.dohvatiSveKnjige().subscribe((data: Knjiga[]) => {
          this.sveKnjige = data;
          this.spremno = true;
        })
      })
    }
  }

  korisnik: Korisnik;
  sveKnjige: Knjiga[] = [];

  zaduzenja: Zaduzenje[] = [];
  sortedData: Zaduzenje[] = [];

  spremno: boolean = false;

  detalji(knj: Knjiga) {
    localStorage.setItem('knjiga', JSON.stringify(knj));
    this.ruter.navigate(['/knjiga']);
  }

  knjiga(z: Zaduzenje): Knjiga {
    let k: Knjiga;
    for (let i = 0; i < this.sveKnjige.length; i++) {
      if (this.sveKnjige[i].id == z.id) {
        k = this.sveKnjige[i];
        break;
      }
    }
    return k;
  }

  sortData(sort: Sort) {
    const data = this.zaduzenja.slice();

    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'naziv':
          return this.compare(this.knjiga(a).naziv, this.knjiga(b).naziv, isAsc);
        case 'autor':
          return this.compare(this.knjiga(a).autor[0], this.knjiga(b).autor[0], isAsc);
        case 'datumZ':
          return this.compare(a.datumZaduzenja, b.datumZaduzenja, isAsc);
        case 'datumV':
          return this.compare(a.datumVracanja, b.datumVracanja, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  
}