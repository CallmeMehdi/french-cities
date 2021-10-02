/// <reference types="mongoose" />
import { CitiesService } from './cities.service';
export declare class CitiesController {
    private readonly citiesService;
    constructor(citiesService: CitiesService);
    getAllCities(): Promise<(import("mongoose").Document<any, any, import("./city.model").City> & import("./city.model").City & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getAllCitiesPrefix(prefix: any): Promise<(import("mongoose").Document<any, any, import("./city.model").City> & import("./city.model").City & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
