import express from 'express';
import { KorisnikController } from '../controllers/korisnik.controller';

const korisnikRouter = express.Router();

korisnikRouter.route('/prijavaNaSistem').post (
    (req, res) => new KorisnikController().prijavaNaSistem(req, res)
)

korisnikRouter.route('/dohvatiKorisnika').post (
    (req, res) => new KorisnikController().dohvatiKorisnika(req, res)
)

korisnikRouter.route('/registracija').post (
    (req, res) => new KorisnikController().registracija(req, res)
)

korisnikRouter.route('/promeniLoz').post (
    (req, res) => new KorisnikController().promeniLoz(req, res)
)

korisnikRouter.route('/dohvatiSveKorisnike').get (
    (req, res) => new KorisnikController().dohvatiSveKorisnike(req, res)
)

korisnikRouter.route('/vratiKnjigu').post (
    (req, res) => new KorisnikController().vratiKnjigu(req, res)
)

korisnikRouter.route('/zaduziKnjigu').post (
    (req, res) => new KorisnikController().zaduziKnjigu(req, res)
)

korisnikRouter.route('/prihvacen').post (
    (req, res) => new KorisnikController().prihvacen(req, res)
)

korisnikRouter.route('/obrisiKorisnika').post (
    (req, res) => new KorisnikController().obrisiKorisnika(req, res)
)

korisnikRouter.route('/azurirajKorisnika').post (
    (req, res) => new KorisnikController().azurirajKorisnika(req, res)
)

export default korisnikRouter;