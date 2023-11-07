import express from 'express';
import { KnjigaController } from '../controllers/knjiga.controller';

const knjigaRouter = express.Router();

knjigaRouter.route('/dohvatiKnjigu').post (
    (req, res) => new KnjigaController().dohvatiKnjigu(req, res)
)

knjigaRouter.route('/dohvatiSveKnjige').get (
    (req, res) => new KnjigaController().dohvatiSveKnjige(req, res)
)

knjigaRouter.route('/promeniBrojKnjige').post (
    (req, res) => new KnjigaController().promeniBrojKnjige(req, res)
)

knjigaRouter.route('/oceniKnjigu').post (
    (req, res) => new KnjigaController().oceniKnjigu(req, res)
)

knjigaRouter.route('/dodajKnjigu').post (
    (req, res) => new KnjigaController().dodajKnjigu(req, res)
)

knjigaRouter.route('/azurirajKnjigu').post (
    (req, res) => new KnjigaController().azurirajKnjigu(req, res)
)

knjigaRouter.route('/obrisiKnjigu').post (
    (req, res) => new KnjigaController().obrisiKnjigu(req, res)
)

export default knjigaRouter;