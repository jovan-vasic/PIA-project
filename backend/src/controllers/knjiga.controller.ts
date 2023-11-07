import express from 'express'
import Knjiga from '../models/knjiga';

export class KnjigaController {
    dohvatiKnjigu = (req: express.Request, res: express.Response) => {
        let id = req.body.id;

        Knjiga.findOne({'id': id}, (err, knjiga) => {
            if (err) console.log(err);
            else res.json(knjiga)
        })
    }

    dohvatiSveKnjige = (req: express.Request, res: express.Response) => {
        Knjiga.find({}, (err, knjige) => {
            if (err) console.log(err)
            else res.json(knjige)
        })
    }

    promeniBrojKnjige = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        let br = req.body.br;

        Knjiga.updateOne({'id': id}, {$set: {"brojNaStanju": br}}, (err, resp) => {
            if (err) console.log(err)
            else res.json({'message': 'updated'})
        })
    }

    oceniKnjigu = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        let ocena = req.body.ocena;

        Knjiga.updateOne({'id': id}, {$push: {'ocene': ocena}}, (err, resp) => {
            if (err) console.log(err)
            else res.json({'message': 'updated'})
        })
    }

    dodajKnjigu = (req: express.Request, res: express.Response) => {
        let knjiga = new Knjiga({
            id: req.body.id,
            naziv: req.body.naziv, 
            autor: req.body.autor, 
            zanr: req.body.zanr, 
            izdavac: req.body.izdavac, 
            godina: req.body.godina, 
            jezik: req.body.jezik, 
            slika: req.body.slika, 
            brojNaStanju: req.body.brojNaStanju,
            ocene: req.body.ocene
        })

        knjiga.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({"message": "error"})
            }
            else res.json({"message": "ok"})
        })
    }

    azurirajKnjigu = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        let naziv = req.body.naziv;
        let autor = req.body.autor;
        let zanr = req.body.zanr;
        let izdavac = req.body.izdavac;
        let godina = req.body.godina;
        let jezik = req.body.jezik;
        let slika = req.body.slika;
        let brojNaStanju = req.body.brojNaStanju;

        Knjiga.updateOne({'id': id}, 
        {$set: {"naziv": naziv, "autor": autor, "zanr": zanr, "izdavac": izdavac, "godina": godina, "jezik": jezik, "slika": slika, "brojNaStanju": brojNaStanju}}, 
        (err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({"message": "error"})
            }
            else res.json({"message": "ok"})
        })
    }

    obrisiKnjigu = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        Knjiga.deleteOne({'id': id}, (err, knjiga) => {
            if(err) console.log(err);
            else res.json(knjiga)
        })
    }

}