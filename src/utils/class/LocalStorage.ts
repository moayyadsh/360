import { LocalStorageEnum } from '../../enums/LocalStorage';

export class LocalStorage {
  static getItem<T>(key: LocalStorageEnum): T | null {
    const value = localStorage.getItem(key);
    if (value === null) {
      return null; // Return null if the item doesn't exist
    }
    try {
      return JSON.parse(value) as T;
    } catch (error) {
      // console.error(
      //   `Error parsing value from localStorage for key "${key}":`,
      //   error,
      // );
      return value as unknown as T;
    }
  }

  static setItem<T>(key: LocalStorageEnum, value: T): void {
    const stringifyValue = JSON.stringify(value);
    localStorage.setItem(key, stringifyValue);
  }
}
