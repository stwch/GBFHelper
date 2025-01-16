import PReact from 'src/components/PReact';
import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'p'> {
  objectStart?: boolean;
  objectEnd?: boolean;
}
const baseY = '.25rem';
const baseX = '.5rem';
const basePd = `${baseY}${baseX}`;
const object = '.375rem';
const startEndPd = `${object}${baseY}`;
const startPd = `${object}${baseX}${baseY}${baseX}`;
const endPd = `${baseY}${baseX}${object}${baseX}`;
export default function ({ children, className, objectStart, objectEnd }: Props) {
  const pdProp = objectStart && objectEnd ? startEndPd : objectStart ? startPd : objectEnd ? endPd : basePd;

  return (
    <PReact
      objectBr={true}
      className={cx(
        className,
        css({
          ml: '1.125rem',
          fontWeight: '700',
          pd: pdProp,
          radius: '2px',
          bgColor: '{colors.gray}',
          color: '{colors.text}',
          pos: 'relative',
          zIndex: 1,
          '&::before': {
            content: '""',
            d: 'block',
            bgImage: 'url(/images/bg-pattern-dark.png)',
            filter: 'opacity(7%)',
            bgSize: '50%',
            pos: 'absolute',
            inset: 0,
            zIndex: '-1'
          }
        })
      )}>
      {children}
    </PReact>
  );
}
