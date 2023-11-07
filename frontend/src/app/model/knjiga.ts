import { Ocena } from "./ocena";

export class Knjiga { 
    id: number;
    naziv: string;
    autor: Array<string>;
    zanr: Array<string>;
    izdavac: string;
    godina: number;
    jezik: string;
    slika: string;
    brojNaStanju: number;
    ocene: Array<Ocena>;
}