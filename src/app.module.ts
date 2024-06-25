import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {MongooseModule} from "@nestjs/mongoose";
const uri = "mongodb+srv://shinjikashvililuka22:shinjikashvililuka22@cluster0.smntvqn.mongodb.net/?appName=Cluster0";
@Module({
  imports: [AuthModule, UsersModule,MongooseModule.forRoot(uri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
