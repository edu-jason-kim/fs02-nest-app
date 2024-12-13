import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/product/product.module';

const MONGODB_CONNECTION_STRING =
  'mongodb://root:example@localhost:27017/test?authSource=admin';

@Module({
  imports: [MongooseModule.forRoot(MONGODB_CONNECTION_STRING), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
