"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knjiga_controller_1 = require("../controllers/knjiga.controller");
const knjigaRouter = express_1.default.Router();
knjigaRouter.route('/dohvatiKnjigu').post((req, res) => new knjiga_controller_1.KnjigaController().dohvatiKnjigu(req, res));
knjigaRouter.route('/dohvatiSveKnjige').get((req, res) => new knjiga_controller_1.KnjigaController().dohvatiSveKnjige(req, res));
knjigaRouter.route('/promeniBrojKnjige').post((req, res) => new knjiga_controller_1.KnjigaController().promeniBrojKnjige(req, res));
knjigaRouter.route('/oceniKnjigu').post((req, res) => new knjiga_controller_1.KnjigaController().oceniKnjigu(req, res));
knjigaRouter.route('/dodajKnjigu').post((req, res) => new knjiga_controller_1.KnjigaController().dodajKnjigu(req, res));
knjigaRouter.route('/azurirajKnjigu').post((req, res) => new knjiga_controller_1.KnjigaController().azurirajKnjigu(req, res));
knjigaRouter.route('/obrisiKnjigu').post((req, res) => new knjiga_controller_1.KnjigaController().obrisiKnjigu(req, res));
exports.default = knjigaRouter;
//# sourceMappingURL=knjiga.routes.js.map