import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../model/korisnik';
import { KorisnikService } from '../service/korisnik.service';

@Component({
  selector: 'app-promena',
  templateUrl: './promena.component.html',
  styleUrls: ['./promena.component.css']
})
export class PromenaComponent implements OnInit {

  constructor(private korisnikService: KorisnikService, private router: Router) { }

  ngOnInit(): void {
    let kor = JSON.parse(localStorage.getItem('ulogovan'));
    if (kor) {
      this.korisnikService.dohvatiKorisnika(kor.kor_ime).subscribe((data: Korisnik) => {
        this.korisnik = data;
        this.spremno = true;
      })
    }
  }

  korisnik: Korisnik;
  spremno: boolean = false

  stara: string;
  lozinka1: string;
  lozinka2: string;
  message: string;
  pwdPattern = new RegExp("^[A-Za-z](?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{7,11}$");

  promena() {
    if (this.stara != this.korisnik.lozinka) {
      alert('Pogrešna stara lozinka');
      return;
    }

    if (!this.pwdPattern.test(this.lozinka1)) {
      alert('Neispravna lozinka');
      return;
    }

    if (!this.pwdPattern.test(this.lozinka2)) {
      alert('Neispravna lozinka');
      return;
    }

    if (this.lozinka1 != this.lozinka2){
      alert("Lozinke se ne poklapaju");
      return;
    }

    this.korisnikService.promeniLoz(this.korisnik.kor_ime, this.lozinka1).subscribe(resp => {
      alert(resp['message']);
    });

    localStorage.getItem('ulogovan');
    this.router.navigate(['prijava']);
  }

}
