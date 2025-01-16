import { elementEntries } from 'src/assets/data/common';
import type { MultiplyOption } from 'src/stores/multiplyStore';

export default function (...multiplyBase: number[]): MultiplyOption {
  const total = multiplyBase.reduce((accu, number) => {
    accu += number;
    return accu;
  }, 0);
  const result = multiplyBase.reduce((accu, number, i) => {
    const elementName = _ObjectKeys(elementEntries)[i];
    accu = { ...accu, [elementName]: number };
    return accu;
  }, {} as MultiplyOption);
  return { ...result, total };
}

function _ObjectKeys<T extends { [key: string]: unknown }>(obj: T): (keyof T)[] {
  return Object.keys(obj);
}
