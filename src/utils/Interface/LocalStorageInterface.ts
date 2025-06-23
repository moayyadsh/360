import { LocalStorageEnum } from '../../enums/LocalStorage';

export interface LocalStorageInterface {
  getItem<T>(key: LocalStorageEnum): T | null;
  setItem<T>(key: LocalStorageEnum, value: T): void;
}
