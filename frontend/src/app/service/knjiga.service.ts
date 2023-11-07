import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ocena } from '../model/ocena';

@Injectable({
  providedIn: 'root'
})
export class KnjigaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  dohvatiKnjigu(id) {
    const podaci = {
      id: id
    }

    return this.http.post(`${this.uri}/knjige/dohvatiKnjigu`, podaci);
  }

  dohvatiSveKnjige() {
    return this.http.get(`${this.uri}/knjige/dohvatiSveKnjige`);
  }

  promeniBrojKnjige(id, br) {
    const podaci = {
      id: id,
      br: br
    }

    return this.http.post(`${this.uri}/knjige/promeniBrojKnjige`, podaci);
  }

  oceniKnjigu(id, ocena) {
    const podaci = {
      id: id,
      ocena: ocena
    }

    return this.http.post(`${this.uri}/knjige/oceniKnjigu`, podaci)
  }

  dodajKnjigu(id, naziv, autor, zanr, izdavac, godina, jezik, slika, brojNaStanju) {
    const podaci = {
      id: id,
      naziv: naziv, 
      autor: autor, 
      zanr: zanr, 
      izdavac: izdavac, 
      godina: godina, 
      jezik: jezik, 
      slika: slika, 
      brojNaStanju: brojNaStanju,
      ocene: []
    }

    return this.http.post(`${this.uri}/knjige/dodajKnjigu`, podaci)
  }

  azurirajKnjigu(id, naziv, autor, zanr, izdavac, godina, jezik, slika, brojNaStanju) {
    const podaci = {
      id: id,
      naziv: naziv, 
      autor: autor, 
      zanr: zanr, 
      izdavac: izdavac, 
      godina: godina, 
      jezik: jezik, 
      slika: slika, 
      brojNaStanju: brojNaStanju
    }

    return this.http.post(`${this.uri}/knjige/azurirajKnjigu`, podaci);
  }
  
  obrisiKnjigu(id){
    const podaci = {
      id: id
    }

    return this.http.post(`${this.uri}/knjige/obrisiKnjigu`, podaci);
  }
  
}
