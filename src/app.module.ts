import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { config } from 'dotenv';

import { AppUpdate } from './app.update';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

config();

const localSession = new LocalSession({ database: 'sessing.json' });

@Module({
  imports: [
    TelegrafModule.forRoot({
      middlewares: [localSession.middleware()],
      token: process.env.TOKEN,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DatabaseModule,
  ],
  providers: [AppService, AppUpdate],
})
export class AppModule {}
