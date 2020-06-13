import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketModule } from './ticket/ticket.module';
import { HallModule } from './hall/hall.module';
import { DevModule } from './dev/dev.module';
import config from './config/keys';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../shared/guards/roles.guard';

@Module({
  imports: [
    UserModule,
    TicketModule,
    MongooseModule.forRoot(config.mongoURI, {
      useFindAndModify: false,
      useNewUrlParser: true
    }),
    HallModule,
    DevModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class ApplicationModule { }