import { Markup } from 'telegraf';

export function actionButtons() {
  return Markup.keyboard(['Save passwords with key', 'Authorization'], {
    columns: 2,
  });
}
