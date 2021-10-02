import {  Controller, Get, Param } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {

    constructor(
        private readonly citiesService: CitiesService
    ) {}

    @Get()
    getAllCities(
    ){

        // console.log(request)
        return this.citiesService.getCities();
    }

    @Get('/:prefix')
    getAllCitiesPrefix(
        @Param('prefix') prefix
    ){
        return this.citiesService.getCitiesPrefix(prefix);
    }
}
