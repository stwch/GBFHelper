import { useEffect } from 'react';
import { setAdStore, useAdStore } from 'src/stores/adStore';

interface Props {}
export default function ({}: Props) {
  const { isRemove, time } = useAdStore();

  useEffect(() => {
    function handler() {
      const is24h = _check24h(time);
      if (is24h) setAdStore({ isRemove: false, time: 0 });
    }
    if (document.readyState) handler();
    window.addEventListener('focus', handler);
    return () => {
      window.removeEventListener('focus', handler);
    };
  }, [isRemove]);

  return false;
}

function _check24h(adRemovedMs: number) {
  if (adRemovedMs === 0) return false;
  const _24hSec = 60 * 60 * 24;
  const adRemovedSec = Math.round(adRemovedMs / 1000);
  const nowSec = Math.round(Date.now() / 1000);
  const currentSec = nowSec - adRemovedSec;
  return currentSec >= _24hSec;
}
