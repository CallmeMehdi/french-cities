import { Injectable } from '@nestjs/common';
import { City } from './city.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CitiesService {

    constructor(
        @InjectModel('City') private readonly cityModel: Model<City>
    ){}

    // Getting all cities without prefix
    async getCities(){

        // Getting Metropole Cities
        let regexpMetropole = new RegExp("^[^ 97]");

        const metropoleCities = await this.cityModel.find({
            "codePostal": regexpMetropole
        }).limit(100);


        // Getting cities outre mer
        let regexpOther = new RegExp("^97");

        const otherCities = await this.cityModel.find({
            "codePostal": regexpOther
        }).limit(100);

        return {
            "metropoleCities": metropoleCities,
            "otherCities": otherCities
        }
    }

    // Getting cities with a prefix
    async getCitiesPrefix(prefix: string){

        let regexp = new RegExp("^"+ prefix);

        // Getting Metropole Cities that start with prefix
        let regexpMetropole = new RegExp("^[^ 97]");

        const metropoleCities = await this.cityModel.find({
            "libelleAcheminement": regexp,
            "codePostal": regexpMetropole
        }).limit(100);


        // Getting cities outre mer that start with prefix
        let regexpOther = new RegExp("^[^ 97]");

        const otherCities = await this.cityModel.find({
            "libelleAcheminement": regexp,
            "codePostal": regexpOther
        }).limit(100);

        return {
            "metropoleCities": metropoleCities,
            "otherCities": otherCities
        }
    }

}
