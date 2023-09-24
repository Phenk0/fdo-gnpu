import { format, formatRelative, isAfter, isValid, subDays } from 'date-fns';
import { uk } from 'date-fns/locale';

export const getDate = (date: string) => {
  const targetDate = new Date(date);
  if (!isValid(targetDate)) return 'дата невідома ☹';
  const localOption = { locale: uk };

  if (isAfter(targetDate, subDays(new Date(), 7))) {
    const text = formatRelative(targetDate, new Date(), localOption);
    return text.slice(0, text.indexOf(' о '));
  }

  const dateTemplate =
    targetDate.getFullYear() === new Date().getFullYear()
      ? 'dd MMMM'
      : "d MMMM y ' року'";

  return format(targetDate, dateTemplate, localOption);
};
