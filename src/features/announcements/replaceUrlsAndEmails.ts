export const replaceUrlsAndEmails = (text: string) => {
  // const urlRegex = /(?:^|[\n\s])((?:https?:\/\/|www\.)(?:\S+))/gi;
  const urlRegex = /(?<=^|\s)((?:https?:\/\/|www\.)(?:\S+))(?=\s|$)/gi;

  const emailRegex = /\S+@\S+\.\S+/gi;

  return text
    .replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank" rel="noreferrer noopener">(Перейти)</a>`;
    })
    .replace(emailRegex, (email) => {
      return `<a href="mailto:${email}" rel="noreferrer noopener">${email}</a>`;
    });
};
