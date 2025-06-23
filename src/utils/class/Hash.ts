// HashManager.ts

export class Hash {
  static getOffset(num?: number): number {
    return num !== undefined
      ? num
      : Number(import.meta.env.REACT_APP_HASH_NUMBER) || 4;
  }

  static hash(str: string, num?: number): string {
    const offset = this.getOffset(num);
    return str
      .split('')
      .map((char) => {
        const charCode = char.charCodeAt(0) + offset;
        return String.fromCharCode(charCode);
      })
      .join('');
  }
  static unHash(str: string, num?: number): string {
    const offset = this.getOffset(num);
    return str
      .split('')
      .map((char) => {
        const charCode = char.charCodeAt(0) - offset;
        return String.fromCharCode(charCode);
      })
      .join('');
  }
}
