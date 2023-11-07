import { Zaduzenje } from "./zaduzenje";

export class Korisnik { 
    kor_ime: string;
    lozinka: string;
    ime: string;
    prezime: string;
    adresa: string;
    telefon: string;
    mejl: string;
    slika: string;
    tip: string;
    prihvacen: string;
    zaduzenja: Array<Zaduzenje>;
}