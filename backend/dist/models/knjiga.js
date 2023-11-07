"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Knjiga = new Schema({
    id: {
        type: Number,
        unique: true
    },
    naziv: {
        type: String
    },
    autor: {
        type: Array
    },
    zanr: {
        type: Array
    },
    izdavac: {
        type: String
    },
    godina: {
        type: Number
    },
    jezik: {
        type: String
    },
    slika: {
        type: String
    },
    brojNaStanju: {
        type: Number
    },
    ocene: {
        type: [{
                kor_ime: String,
                ocena: Number,
                komentar: String,
                datum: String,
                vreme: String
            }]
    }
}, { versionKey: false });
exports.default = mongoose_1.default.model('Knjiga', Knjiga, 'knjige');
//# sourceMappingURL=knjiga.js.map