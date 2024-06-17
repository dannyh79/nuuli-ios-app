// NOTE: Irregular plural forms are not supported
export const toLocale = (
  count: number | string,
  word: string,
  isPlural: boolean,
) => `${count} ${word}${isPlural ? 's' : ''}`;
