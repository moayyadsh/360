import { LocalStorageEnum } from '../../enums/LocalStorage';
import { Hash } from './Hash';

export class HashLocalStorage extends Hash {
  static getItem<T>(key: LocalStorageEnum): T | null {
    const hashedValue = localStorage.getItem(key);
    if (!hashedValue) return null;

    try {
      const unHashedValue = this.unHash(hashedValue);
      return JSON.parse(unHashedValue) as T;
    } catch {
      return null;
    }
  }

  static setItem<T>(key: LocalStorageEnum, value: T): void {
    const stringifyValue = JSON.stringify(value);
    const hashedValue = this.hash(stringifyValue);
    localStorage.setItem(key, hashedValue);
  }
}
