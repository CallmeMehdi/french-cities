import { Injectable } from '@nestjs/common';
import { City } from './city.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CitiesService {
    private cities: City[];

    constructor(
        @InjectModel('City') private readonly cityModel: Model<City>
    ){}

    async getCities(prefix: string){

        var regexp = new RegExp("^"+ prefix);

        const cities = await this.cityModel.find({
            "libelleAcheminement": regexp
        }).limit(100);

        return cities
    }

}
