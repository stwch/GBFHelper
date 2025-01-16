import { persistentAtom } from '@nanostores/persistent';
import { useStore } from '@nanostores/react';

const adStore = persistentAtom<{
  isRemove: boolean;
  time: number;
}>(
  'gbf_helper_ad',
  {
    isRemove: false,
    time: 0
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);
interface Payload {
  isRemove: boolean;
  time: number;
}

export function useAdStore() {
  return useStore(adStore);
}

export function setAdStore({ isRemove, time }: Payload) {
  adStore.set({ isRemove, time });
}
