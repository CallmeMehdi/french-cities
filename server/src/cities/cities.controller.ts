import { Body, Controller, Get } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {

    constructor(
        private readonly citiesService: CitiesService
    ) {}

    @Get()
    getAllCities(
        @Body('prefix') prefix: string
    ){
        return this.citiesService.getCities(prefix);
    }
}
