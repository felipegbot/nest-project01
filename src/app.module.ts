import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudMiddleware } from './crud/extra/crud.middleware';
import { CrudController } from './crud/controller/crud.controller';
import { CrudService } from './crud/service/crud.service';

@Module({
  imports: [],
  controllers: [AppController, CrudController],
  providers: [AppService, CrudService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CrudMiddleware).forRoutes(CrudController)
  }
}
