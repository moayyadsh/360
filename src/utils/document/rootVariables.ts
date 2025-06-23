export const getVariables = (Variables: string): string | undefined => {
  return getComputedStyle(
    document.querySelector(':root') as Element,
  )?.getPropertyValue(`--${Variables}`);
};

export const setVariables = (Variables: string, value: string): void => {
  document.documentElement.style.setProperty(`--${Variables}`, value);
};
