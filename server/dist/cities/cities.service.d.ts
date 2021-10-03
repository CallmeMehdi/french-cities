import { City } from './city.model';
import { Model } from 'mongoose';
export declare class CitiesService {
    private readonly cityModel;
    constructor(cityModel: Model<City>);
    getCities(): Promise<{
        metropoleCities: (import("mongoose").Document<any, any, City> & City & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        otherCities: (import("mongoose").Document<any, any, City> & City & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getCitiesPrefix(prefix: string): Promise<{
        metropoleCities: (import("mongoose").Document<any, any, City> & City & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        otherCities: (import("mongoose").Document<any, any, City> & City & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
}
