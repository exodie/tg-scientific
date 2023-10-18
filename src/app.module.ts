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
      token: '6386287837:AAHgE3T4z_8GaK5LFVscxrQNWkn32Hq4SXA',
    }),
  ],
  providers: [AppService, AppUpdate],
})
export class AppModule {}
