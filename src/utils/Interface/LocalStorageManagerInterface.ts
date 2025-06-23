import { LocalStorageEnum } from '../../enums/LocalStorage';
import { LocalStorageInterface } from './LocalStorageInterface';

export interface LocalStorageManagerInterface extends LocalStorageInterface {
  removeItem(key: LocalStorageEnum): void;
  clearItems(): void;
}
