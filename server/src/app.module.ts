import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [MongooseModule.forRoot(
    'mongourl'
    ), CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
