/// <reference types="mongoose" />
import { CitiesService } from './cities.service';
export declare class CitiesController {
    private readonly citiesService;
    constructor(citiesService: CitiesService);
    getAllCities(prefix: string): Promise<(import("mongoose").Document<any, any, import("./city.model").City> & import("./city.model").City & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
