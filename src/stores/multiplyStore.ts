import { persistentAtom } from '@nanostores/persistent';
import { useStore } from '@nanostores/react';
import { juttenInitialMultiply } from 'src/assets/data/jutten';
import { juttenKyokuseiInitialMultiply } from 'src/assets/data/jutten-kyokusei';
import type { Merge } from 'type-fest';
const multiplyStore = persistentAtom<{ [key: string]: { [key: string]: number } }>(
  'contents_chart_multiply',
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);

export const intialMultiplyEntries = {
  jutten: juttenInitialMultiply,
  'jutten-kyokusei': juttenKyokuseiInitialMultiply
};
export const recommendTotalEntries = {
  jutten: 10,
  'jutten-kyokusei': 4
};
export type NeedMultiplyCategory = keyof typeof intialMultiplyEntries;

export type MultiplyOption = { [k: string]: number };
interface Payload {
  contentName: string;
  stepName: string;
}
export function initMultiply({
  contentName,
  stepName,
  initialMultiply
}: Merge<Payload, { initialMultiply: MultiplyOption }>) {
  const storeKey = `${contentName}-${stepName}`;
  const storeData = multiplyStore.get();
  const existingMultiply = storeData[storeKey];
  if (existingMultiply) {
    multiplyStore.set({ ...storeData, current: existingMultiply });
  } else {
    multiplyStore.set({ ...storeData, [storeKey]: initialMultiply, current: initialMultiply });
  }
}
export function useCurrentMultiply() {
  return useStore(multiplyStore).current;
}
export interface MultiplyEntry {
  multiplyEntry: { [key: string]: number };
}
export function setMultiply({ contentName, stepName, multiplyEntry }: Merge<Payload, MultiplyEntry>) {
  const storeKey = `${contentName}-${stepName}`;
  const storeData = multiplyStore.get();
  const multiply = storeData[storeKey];
  const newEntry = { ...multiply, ...multiplyEntry };
  const totalNumber = _total(newEntry);
  const newMultiply = { ...newEntry, total: totalNumber };
  multiplyStore.set({ ...storeData, [storeKey]: newMultiply, current: newMultiply });
}
export function resetMultiply({
  contentName,
  stepName,
  initialMultiply
}: Merge<Payload, { initialMultiply: MultiplyOption }>) {
  const storeKey = `${contentName}-${stepName}`;
  const storeData = multiplyStore.get();
  multiplyStore.set({ ...storeData, [storeKey]: initialMultiply, current: initialMultiply });
}
function _total(multiplyEntry: MultiplyEntry['multiplyEntry']): number {
  const { total, ...elements } = multiplyEntry;
  return Object.values(elements).reduce((accu, number) => {
    accu += number;
    return accu;
  }, 0);
}
