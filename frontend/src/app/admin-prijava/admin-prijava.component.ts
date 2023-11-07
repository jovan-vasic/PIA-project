import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../model/korisnik';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-prijava',
  templateUrl: './admin-prijava.component.html',
  styleUrls: ['./admin-prijava.component.css']
})
export class AdminPrijavaComponent implements OnInit {

  constructor(private korSer: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  kor_ime: string;
  lozinka: string;
  greska: string;

  prijava() {
    this.korSer.prijavaNaSistem(this.kor_ime,this.lozinka).subscribe((kor: Korisnik) => {
      if (kor) {
        if (kor.tip == 'administrator') {
          localStorage.setItem('ulogovan', JSON.stringify(kor));
          this.router.navigate(['admin']).then(() => {
            window.location.reload();
          });
        } else {
          this.greska = 'Greška'
        }
      } else {
        this.greska = 'Greska'
      }
    })
  }

}
