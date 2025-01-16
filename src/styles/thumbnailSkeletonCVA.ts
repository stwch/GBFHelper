import { cva } from 'styled-system/css';

export const thumbnailSkeletonCVA = cva({
  base: {
    d: 'block',
    aspectRatio: '280/160'
  },
  variants: {
    thumbnail: {
      modalTarget: { w: 'clamp(175px, 50svw, 280px)' },
      modalBtn: { w: 'clamp(106px, 30svw, 280px)' },
      treasureList: { w: 'clamp(63px, 25svw, 280px)' },
      contentsLabel: { w: 'clamp(121px, 35svw, 280px)' },
      contentsList: { w: 'clamp(130px, 35svw, 280px)' }
    }
  }
});
