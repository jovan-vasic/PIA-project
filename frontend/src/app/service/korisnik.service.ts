import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  uri='http://localhost:4000'

  prijavaNaSistem(kor_ime, lozinka){
    const podaci = {
      kor_ime: kor_ime,
      lozinka: lozinka
    }

    return this.http.post(`${this.uri}/korisnici/prijavaNaSistem`, podaci);
  }

  dohvatiKorisnika(kor_ime){
    const podaci = {
      kor_ime: kor_ime
    }

    return this.http.post(`${this.uri}/korisnici/dohvatiKorisnika`, podaci);
  }

  registracija(kor_ime, lozinka, ime, prezima, adresa, telefon, mejl, url, prihvacen){
    // let korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    const podaci = {
      kor_ime: kor_ime,
      lozinka: lozinka,
      ime: ime,
      prezime: prezima,
      adresa: adresa,
      telefon: telefon,
      mejl: mejl,
      slika: url,
      tip: "citalac",
      prihvacen: prihvacen,
      zaduzenja: []
    }

    return this.http.post(`${this.uri}/korisnici/registracija`, podaci)
  }

  promeniLoz(kor_ime, nova) {
    const podaci = {
      kor_ime: kor_ime,
      nova: nova
    }
    return this.http.post(`${this.uri}/korisnici/promeniLoz`, podaci);
  }

  dohvatiSveKorisnike() {
    return this.http.get(`${this.uri}/korisnici/dohvatiSveKorisnike`);
  }

  vratiKnjigu(kor_ime, id){
    const podaci = {
      kor_ime: kor_ime,
      id: id
    }

    return this.http.post(`${this.uri}/korisnici/vratiKnjigu`, podaci)
  }

  zaduziKnjigu(kor_ime, zaduzenje){
    const podaci = {
      kor_ime: kor_ime,
      zaduzenje: zaduzenje
    }

    return this.http.post(`${this.uri}/korisnici/zaduziKnjigu`, podaci)
  }

  prihvacen(kor_ime, prihvacen) {
    const podaci = {
      kor_ime: kor_ime,
      prihvacen: prihvacen
    }
    return this.http.post(`${this.uri}/korisnici/prihvacen`, podaci);
  }

  obrisiKorisnika(kor_ime){
    const podaci = {
      kor_ime: kor_ime
    }

    return this.http.post(`${this.uri}/korisnici/obrisiKorisnika`, podaci);
  }

  azurirajKorisnika(kor_ime, kor_imeN, lozinka, ime, prezime, adresa, telefon, mejl, slika,){
    const podaci = {
      kor_ime: kor_ime,
      kor_imeN: kor_imeN,
      lozinka: lozinka,
      ime: ime,
      prezime: prezime,
      adresa: adresa,
      telefon: telefon,
      mejl: mejl,
      slika: slika
    }

    return this.http.post(`${this.uri}/korisnici/azurirajKorisnika`, podaci);
  }
  
}
