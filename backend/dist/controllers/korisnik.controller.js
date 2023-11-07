"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const korisnik_1 = __importDefault(require("../models/korisnik"));
class KorisnikController {
    constructor() {
        this.prijavaNaSistem = (req, res) => {
            let kor_ime = req.body.kor_ime;
            let lozinka = req.body.lozinka;
            korisnik_1.default.findOne({ 'kor_ime': kor_ime, 'lozinka': lozinka }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.dohvatiKorisnika = (req, res) => {
            let kor_ime = req.body.kor_ime;
            korisnik_1.default.findOne({ 'kor_ime': kor_ime }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.registracija = (req, res) => {
            let korisnik = new korisnik_1.default({
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
            });
            korisnik.save((err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else
                    res.json({ "message": "ok" });
            });
        };
        this.promeniLoz = (req, res) => {
            let kor_ime = req.body.kor_ime;
            let nova = req.body.nova;
            korisnik_1.default.updateOne({ 'kor_ime': kor_ime }, { $set: { 'lozinka': nova } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'updated' });
            });
        };
        this.dohvatiSveKorisnike = (req, res) => {
            korisnik_1.default.find({}, (err, korisnici) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnici);
            });
        };
        this.vratiKnjigu = (req, res) => {
            let kor_ime = req.body.kor_ime;
            let id = req.body.id;
            let sada = new Date();
            let godina = sada.getFullYear() + "";
            let mesec = String(sada.getMonth() + 1).padStart(2, '0');
            let dan = String(sada.getDate()).padStart(2, '0');
            let trenutniDatum = godina + "-" + mesec + "-" + dan;
            korisnik_1.default.updateOne({ 'kor_ime': kor_ime }, { $set: { "zaduzenja.$[knj].datumVracanja": trenutniDatum } }, { arrayFilters: [{
                        "knj.id": id,
                        "knj.datumVracanja": "",
                    }] }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'updated' });
            });
        };
        this.zaduziKnjigu = (req, res) => {
            let kor_ime = req.body.kor_ime;
            let zaduzenje = req.body.zaduzenje;
            korisnik_1.default.updateOne({ 'kor_ime': kor_ime }, { $push: { 'zaduzenja': zaduzenje } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'updated' });
            });
        };
        this.prihvacen = (req, res) => {
            let kor_ime = req.body.kor_ime;
            let prihvacen = req.body.prihvacen;
            korisnik_1.default.updateOne({ 'kor_ime': kor_ime }, { $set: { 'prihvacen': prihvacen } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'updated' });
            });
        };
        this.obrisiKorisnika = (req, res) => {
            let kor_ime = req.body.kor_ime;
            korisnik_1.default.deleteOne({ 'kor_ime': kor_ime }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.azurirajKorisnika = (req, res) => {
            let kor_ime = req.body.kor_ime;
            let kor_imeN = req.body.kor_imeN;
            let lozinka = req.body.lozinka;
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let adresa = req.body.adresa;
            let telefon = req.body.telefon;
            let mejl = req.body.mejl;
            let slika = req.body.slika;
            korisnik_1.default.updateOne({ 'kor_ime': kor_ime }, { $set: { 'kor_ime': kor_imeN, "lozinka": lozinka, "ime": ime, "prezime": prezime, "adresa": adresa, "telefon": telefon, "mejl": mejl, "slika": slika } }, (err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else
                    res.json({ "message": "ok" });
            });
        };
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map