import { cva } from 'styled-system/css';

export default cva({
  base: {
    d: 'block',
    aspectRatio: '1/1'
  },
  variants: {
    icon: {
      currentElementChange: { w: 'clamp(20px, 5svw, 48px)' }
    }
  }
});
