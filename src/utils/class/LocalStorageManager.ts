import { HashLocalStorage } from './HashLocalStorage';
import { LocalStorage } from './LocalStorage';
import { LocalStorageManagerInterface } from '../Interface/LocalStorageManagerInterface';
import { LocalStorageEnum } from '../../enums/LocalStorage';

const isHashed = import.meta.env.REACT_APP_IS_HASH === 'true';

export class LocalStorageManagerClass extends (isHashed
  ? HashLocalStorage
  : LocalStorage) {
  static removeItem(key: LocalStorageEnum): void {
    localStorage.removeItem(key);
  }

  static clearItems(): void {
    localStorage.clear();
  }
}

export const LocalStorageManager: LocalStorageManagerInterface =
  LocalStorageManagerClass;
