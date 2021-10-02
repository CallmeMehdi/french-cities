import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb+srv://root:root@cluster0.xylmi.mongodb.net/graneet?retryWrites=true&w=majority'
    ), CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
