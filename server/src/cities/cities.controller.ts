import { Body, Controller, Get, Req, Post, Param } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { Request } from 'express';

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

        console.log(prefix)
        // console.log(request)
        return this.citiesService.getCitiesPrefix(prefix);
    }
}
