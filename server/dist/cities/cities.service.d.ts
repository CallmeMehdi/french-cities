import { City } from './city.model';
import { Model } from 'mongoose';
export declare class CitiesService {
    private readonly cityModel;
    private cities;
    constructor(cityModel: Model<City>);
    getCities(): Promise<(import("mongoose").Document<any, any, City> & City & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getCitiesPrefix(prefix: string): Promise<(import("mongoose").Document<any, any, City> & City & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
