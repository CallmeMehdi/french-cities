import * as mongoose from 'mongoose';

export const CitySchema = new mongoose.Schema({
    codePostal: {type: String, required: true},
    codeCommune: {type: String, required: true},
    nomCommune: {type: String, required: true},
    libelleAcheminement: {type: String, required: true}
}, {collection :'french-cities'});


export interface City{
    id: string;
    codePostal: string;
    codeCommune: string;
    nomCommune: string;
    libelleAcheminement: string;
}