export const getBodyClassName = (className: string): string | null => {
  return document.body.classList.contains(className) ? className : null;
};

export const setBodyClassName = (className: string): void => {
  document.body.classList.add(className);
};

export const removeBodyClassName = (className: string): void => {
  document.body.classList.remove(className);
};
