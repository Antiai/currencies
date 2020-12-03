export interface IFormatDateOptions {
  includeTime?: boolean;
  locale?: string;
}

const formatDate = (
  date: string,
  {includeTime = false, locale = 'ru-RU'}: IFormatDateOptions = {}
): string => {
  const dateObject = new Date(date);

  const formattedDate = dateObject.toLocaleDateString(locale);
  const formattedTime = dateObject.toLocaleTimeString(locale, {hour: '2-digit', minute: '2-digit'});

  return `${includeTime ? `${formattedTime} ` : ''}${formattedDate}`;
};

export default formatDate;