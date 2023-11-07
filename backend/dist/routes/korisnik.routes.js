"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const korisnik_controller_1 = require("../controllers/korisnik.controller");
const korisnikRouter = express_1.default.Router();
korisnikRouter.route('/prijavaNaSistem').post((req, res) => new korisnik_controller_1.KorisnikController().prijavaNaSistem(req, res));
korisnikRouter.route('/dohvatiKorisnika').post((req, res) => new korisnik_controller_1.KorisnikController().dohvatiKorisnika(req, res));
korisnikRouter.route('/registracija').post((req, res) => new korisnik_controller_1.KorisnikController().registracija(req, res));
korisnikRouter.route('/promeniLoz').post((req, res) => new korisnik_controller_1.KorisnikController().promeniLoz(req, res));
korisnikRouter.route('/dohvatiSveKorisnike').get((req, res) => new korisnik_controller_1.KorisnikController().dohvatiSveKorisnike(req, res));
korisnikRouter.route('/vratiKnjigu').post((req, res) => new korisnik_controller_1.KorisnikController().vratiKnjigu(req, res));
korisnikRouter.route('/zaduziKnjigu').post((req, res) => new korisnik_controller_1.KorisnikController().zaduziKnjigu(req, res));
korisnikRouter.route('/prihvacen').post((req, res) => new korisnik_controller_1.KorisnikController().prihvacen(req, res));
korisnikRouter.route('/obrisiKorisnika').post((req, res) => new korisnik_controller_1.KorisnikController().obrisiKorisnika(req, res));
korisnikRouter.route('/azurirajKorisnika').post((req, res) => new korisnik_controller_1.KorisnikController().azurirajKorisnika(req, res));
exports.default = korisnikRouter;
//# sourceMappingURL=korisnik.routes.js.map