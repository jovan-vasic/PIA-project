"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Korisnik = new Schema({
    kor_ime: {
        type: String,
        required: true,
        unique: true
    },
    lozinka: {
        type: String,
        required: true
    },
    ime: {
        type: String,
        required: true
    },
    prezime: {
        type: String,
        required: true
    },
    adresa: {
        type: String,
        required: true
    },
    telefon: {
        type: String,
        required: true
    },
    mejl: {
        type: String,
        required: true,
        unique: true
    },
    slika: {
        type: String
    },
    tip: {
        type: String
    },
    prihvacen: {
        type: String
    },
    zaduzenja: {
        type: [{
                id: Number,
                datumZaduzenja: String,
                datumVracanja: String
            }]
    }
}, { versionKey: false });
exports.default = mongoose_1.default.model('Korisnik', Korisnik, 'korisnici');
//# sourceMappingURL=korisnik.js.map