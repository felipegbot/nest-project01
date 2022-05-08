import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudController } from './crud/crud.controller';
import { CrudService } from './crud/crud.service';

@Module({
  imports: [],
  controllers: [AppController, CrudController],
  providers: [AppService, CrudService],
})
export class AppModule {}
