import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Knjiga = new Schema(
    {
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
    },  { versionKey: false }
)

export default mongoose.model('Knjiga', Knjiga, 'knjige');