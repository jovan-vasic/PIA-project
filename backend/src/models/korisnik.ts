import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Korisnik = new Schema(
    {
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
    },  { versionKey: false }
)

export default mongoose.model('Korisnik', Korisnik, 'korisnici');