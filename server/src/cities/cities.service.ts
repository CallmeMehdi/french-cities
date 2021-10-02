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

        const cities = await this.cityModel.find().limit(100);

        return cities
    }

    // Getting cities with a prefix
    async getCitiesPrefix(prefix: string){

        var regexp = new RegExp("^"+ prefix);

        const cities = await this.cityModel.find({
            "libelleAcheminement": regexp
        }).limit(100);

        return cities
    }

}
