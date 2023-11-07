"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnjigaController = void 0;
const knjiga_1 = __importDefault(require("../models/knjiga"));
class KnjigaController {
    constructor() {
        this.dohvatiKnjigu = (req, res) => {
            let id = req.body.id;
            knjiga_1.default.findOne({ 'id': id }, (err, knjiga) => {
                if (err)
                    console.log(err);
                else
                    res.json(knjiga);
            });
        };
        this.dohvatiSveKnjige = (req, res) => {
            knjiga_1.default.find({}, (err, knjige) => {
                if (err)
                    console.log(err);
                else
                    res.json(knjige);
            });
        };
        this.promeniBrojKnjige = (req, res) => {
            let id = req.body.id;
            let br = req.body.br;
            knjiga_1.default.updateOne({ 'id': id }, { $set: { "brojNaStanju": br } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'updated' });
            });
        };
        this.oceniKnjigu = (req, res) => {
            let id = req.body.id;
            let ocena = req.body.ocena;
            knjiga_1.default.updateOne({ 'id': id }, { $push: { 'ocene': ocena } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'updated' });
            });
        };
        this.dodajKnjigu = (req, res) => {
            let knjiga = new knjiga_1.default({
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
            });
            knjiga.save((err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else
                    res.json({ "message": "ok" });
            });
        };
        this.azurirajKnjigu = (req, res) => {
            let id = req.body.id;
            let naziv = req.body.naziv;
            let autor = req.body.autor;
            let zanr = req.body.zanr;
            let izdavac = req.body.izdavac;
            let godina = req.body.godina;
            let jezik = req.body.jezik;
            let slika = req.body.slika;
            let brojNaStanju = req.body.brojNaStanju;
            knjiga_1.default.updateOne({ 'id': id }, { $set: { "naziv": naziv, "autor": autor, "zanr": zanr, "izdavac": izdavac, "godina": godina, "jezik": jezik, "slika": slika, "brojNaStanju": brojNaStanju } }, (err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else
                    res.json({ "message": "ok" });
            });
        };
        this.obrisiKnjigu = (req, res) => {
            let id = req.body.id;
            knjiga_1.default.deleteOne({ 'id': id }, (err, knjiga) => {
                if (err)
                    console.log(err);
                else
                    res.json(knjiga);
            });
        };
    }
}
exports.KnjigaController = KnjigaController;
//# sourceMappingURL=knjiga.controller.js.map