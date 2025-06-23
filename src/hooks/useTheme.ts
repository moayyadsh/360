import { useState, useEffect } from 'react';
import { LocalStorageEnum } from '../enums/LocalStorage';
import { LocalStorageManager } from '../utils/class/LocalStorageManager';

function useTheme(): [string, () => void] {
  const [theme, setTheme] = useState(() => {
    const storedTheme = LocalStorageManager.getItem(
      LocalStorageEnum.THEME_KEY,
    ) as string;
    return storedTheme ? storedTheme : 'light';
  });

  useEffect(() => {
    // Update the body class when the theme changes
    document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
    document.body.classList.add(theme);

    // Save the new theme to local storage
    LocalStorageManager.setItem(LocalStorageEnum.THEME_KEY, theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, changeTheme];
}

export default useTheme;
