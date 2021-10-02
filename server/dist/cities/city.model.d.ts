import * as mongoose from 'mongoose';
export declare const CitySchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}>;
export interface City {
    id: string;
    codePostal: string;
    codeCommune: string;
    nomCommune: string;
    libelleAcheminement: string;
}
