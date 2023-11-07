import express from 'express'
import Korisnik from '../models/korisnik';

export class KorisnikController{
    prijavaNaSistem = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.kor_ime;
        let lozinka = req.body.lozinka;

        Korisnik.findOne({'kor_ime': kor_ime, 'lozinka': lozinka}, (err, korisnik) => {
            if(err) console.log(err);
            else res.json(korisnik)
        })
    }

    dohvatiKorisnika = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.kor_ime;
        Korisnik.findOne({'kor_ime': kor_ime}, (err, korisnik)=>{
            if(err) console.log(err);
            else res.json(korisnik)
        })
    }

    registracija = (req: express.Request, res: express.Response) => {
        let korisnik = new Korisnik({
            kor_ime: req.body.kor_ime,
            lozinka: req.body.lozinka,
            ime: req.body.ime,
            prezime: req.body.prezime,
            adresa: req.body.adresa,
            telefon: req.body.telefon,
            mejl: req.body.mejl,
            slika: req.body.slika,
            tip: req.body.tip,
            prihvacen: req.body.prihvacen,
            zaduzenja: req.body.zaduzenja
        })

        korisnik.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({"message": "error"})
            }
            else res.json({"message": "ok"})
        })
    }

    promeniLoz = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.kor_ime;
        let nova = req.body.nova;
        Korisnik.updateOne({'kor_ime': kor_ime}, {$set: {'lozinka': nova}}, (err, resp)=>{
            if (err) console.log(err)
            else res.json({'message': 'updated'})
        })
    }

    dohvatiSveKorisnike = (req: express.Request, res: express.Response) => {
        Korisnik.find({}, (err, korisnici)=>{
            if (err) console.log(err);
            else res.json(korisnici)
        })
    }

    vratiKnjigu = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.kor_ime;
        let id = req.body.id;

        let sada = new Date();
        let godina: string = sada.getFullYear() + "";
        let mesec: string = String(sada.getMonth() + 1).padStart(2, '0');
        let dan: string = String(sada.getDate()).padStart(2, '0');
    
        let trenutniDatum: string = godina + "-" + mesec + "-" + dan;

        Korisnik.updateOne({'kor_ime': kor_ime}, {$set: {"zaduzenja.$[knj].datumVracanja": trenutniDatum}}, {arrayFilters: [{
            "knj.id": id,
            "knj.datumVracanja": "",
        }]}, (err, resp) => {
            if (err) console.log(err)
            else res.json({'message': 'updated'})
        })
    }

    zaduziKnjigu = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.kor_ime;
        let zaduzenje = req.body.zaduzenje;

        Korisnik.updateOne({'kor_ime': kor_ime}, {$push: {'zaduzenja': zaduzenje}}, (err, resp) => {
            if (err) console.log(err)
            else res.json({'message': 'updated'})
        })
    }

    prihvacen = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.kor_ime;
        let prihvacen = req.body.prihvacen;
        Korisnik.updateOne({'kor_ime': kor_ime}, {$set: {'prihvacen': prihvacen}}, (err, resp)=>{
            if (err) console.log(err)
            else res.json({'message': 'updated'})
        })
    }
    
    obrisiKorisnika = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.kor_ime;
        Korisnik.deleteOne({'kor_ime': kor_ime}, (err, korisnik)=>{
            if(err) console.log(err);
            else res.json(korisnik)
        })
    }

    azurirajKorisnika = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.kor_ime;
        let kor_imeN = req.body.kor_imeN;
        let lozinka = req.body.lozinka;
        let ime = req.body.ime;
        let prezime = req.body.prezime;
        let adresa = req.body.adresa;
        let telefon = req.body.telefon;
        let mejl = req.body.mejl;
        let slika = req.body.slika;
        
        Korisnik.updateOne({'kor_ime': kor_ime}, 
        {$set: {'kor_ime': kor_imeN, "lozinka": lozinka, "ime": ime, "prezime": prezime, "adresa": adresa, "telefon": telefon, "mejl": mejl, "slika": slika}}, 
        (err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({"message": "error"})
            }
            else res.json({"message": "ok"})
        })
    }
}