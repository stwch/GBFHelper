import { persistentAtom } from '@nanostores/persistent';
import { useStore } from '@nanostores/react';

const elementChangeStore = persistentAtom<{ [key: string]: string }>(
  'contents_chart_element_change',
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);
interface Payload {
  contentName: string;
  stepName: string;
  elementName: string;
}
export function initElementChange({ contentName, stepName, elementName }: Payload) {
  const storeKey = `${contentName}-${stepName}`;
  const storeData = elementChangeStore.get();
  const existingElementChange = storeData[storeKey];
  if (existingElementChange) {
    elementChangeStore.set({ ...storeData, current: existingElementChange });
  } else {
    elementChangeStore.set({ ...storeData, [storeKey]: elementName, current: elementName });
  }
}
export function useCurrentElementChange() {
  return useStore(elementChangeStore).current;
}
export function setElementChange({ contentName, stepName, elementName }: Payload) {
  const storeKey = `${contentName}-${stepName}`;
  const storeData = elementChangeStore.get();
  elementChangeStore.set({ ...storeData, [storeKey]: elementName, current: elementName });
}
