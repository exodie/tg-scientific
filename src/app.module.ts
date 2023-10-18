import { Module } from '@nestjs/common';
import { AppUpdate } from './app.update';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';

const localSession = new LocalSession({ database: 'sessing.json' });

@Module({
  imports: [
    TelegrafModule.forRoot({
      middlewares: [localSession.middleware()],
      token: process.env.TOKEN,
    }),
  ],
  providers: [AppService, AppUpdate],
})
export class AppModule {}
