import { Command, Hears, InjectBot, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';

import { actionButtons } from './app.button';

@Update()
export class AppUpdate {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}

  @Start()
  async startCmd(ctx: Context) {
    await ctx.reply(
      '- You can use /help for given more information\n' +
        '- Now you can choose?',
      actionButtons(),
    );
  }

  @Hears('Save passwords with key')
  @Command('save')
  async test1(ctx: Context) {
    await ctx.reply('save button is clicked');
  }

  @Hears('Authorization')
  @Command('auth')
  async auth(ctx: Context) {
    await ctx.reply('authorization');
  }
}
