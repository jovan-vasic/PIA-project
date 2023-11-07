import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../service/korisnik.service';
import { Korisnik } from '../model/korisnik';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private korisnikServis: KorisnikService, private ruter: Router) { }

  ngOnInit(): void {
  }

  kor_ime: string;
  lozinka: string;
  greska: string;

  prijava() {
    this.korisnikServis.prijavaNaSistem(this.kor_ime, this.lozinka).subscribe((kor: Korisnik)=>{
      if (kor) {
        if (kor.prihvacen == "ne") {
          this.greska = 'Vaš zahtev za registraciju je odbijen'
          return;
        }

        if (kor.prihvacen == "ceka") {
          this.greska = 'Vaš zahtev za registraciju još uvek nije prihvaćen'
          return;
        }

        if (kor.prihvacen == "da" && kor.tip != "administrator") {
          localStorage.setItem('ulogovan', JSON.stringify(kor));
          if (kor.tip == 'citalac') {
            this.ruter.navigate(['citalac']).then(() => {
              window.location.reload();
            });
          }
          else if (kor.tip == 'moderator') {
            this.ruter.navigate(['citalac']).then(() => {
              window.location.reload();
            });
          }
        } else {
          this.greska = 'Greška'
        }
      } else {
        this.greska = 'Greška'
      }
    });
  }

}

