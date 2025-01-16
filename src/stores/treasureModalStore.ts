import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import type { TreasuresData } from 'src/helpers/createContentsData';

const treasureModalStore = atom<TreasuresData[number] | null>(null);

export function setTreasureModal(treasure: TreasuresData[number]) {
  treasureModalStore.set(treasure);
}

export function useTreasureModal() {
  return useStore(treasureModalStore);
}
