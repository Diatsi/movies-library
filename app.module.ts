import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './modules/movies.module';
import { CrewModule } from './modules/crew.module';

@Module({
  imports: [MoviesModule, CrewModule, MongooseModule.forRoot('mongodb+srv://john:MSZ03Pz4tNIFd72I@cluster0.leuei.mongodb.net/nestjs-demolibrary?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
  exports: [],

})
export class AppModule { }
