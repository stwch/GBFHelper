import { useRef, type RefObject } from 'react';
import { setMultiply, useCurrentMultiply, type MultiplyOption } from 'src/stores/multiplyStore';
import { css, cva, cx } from 'styled-system/css';

const boProp = '1px solid';
const textShadowProp = '0 0 2px rgba(0, 0, 0, .5), 0 0 1px rgba(0, 0, 0, 1)';
const textStyles = {
  color: '{colors.gray}',
  textShadow: textShadowProp
};
const elementColorCVA = cva({
  variants: {
    fire: {
      bo: { bo: `${boProp} {colors.fire}` },
      bg: { bgColor: '{colors.fire}' },
      option: {
        '&+&': { bt: `${boProp} {colors.fire}` }
        // '&:hover': {
        //   bgColor: '{colors.fire}',
        //   ...textStyles
        // }
      }
    },
    water: {
      bo: { bo: `${boProp} {colors.water}` },
      bg: { bgColor: '{colors.water}' },
      option: {
        '&+&': { bt: `${boProp} {colors.water}` },
        '&:hover': {
          bgColor: '{colors.water}',
          ...textStyles
        }
      }
    },
    earth: {
      bo: { bo: `${boProp} {colors.earth}` },
      bg: { bgColor: '{colors.earth}' },
      option: {
        '&+&': { bt: `${boProp} {colors.earth}` },
        '&:hover': {
          bgColor: '{colors.earth}',
          ...textStyles
        }
      }
    },
    wind: {
      bo: { bo: `${boProp} {colors.wind}` },
      bg: { bgColor: '{colors.wind}' },
      option: {
        '&+&': { bt: `${boProp} {colors.wind}` },
        '&:hover': {
          bgColor: '{colors.wind}',
          ...textStyles
        }
      }
    },
    light: {
      bo: { bo: `${boProp} {colors.light}` },
      bg: { bgColor: '{colors.light}' },
      option: {
        '&+&': { bt: `${boProp} {colors.light}` },
        '&:hover': {
          bgColor: '{colors.light}',
          ...textStyles
        }
      }
    },
    dark: {
      bo: { bo: `${boProp} {colors.dark}` },
      bg: { bgColor: '{colors.dark}' },
      option: {
        '&+&': { bt: `${boProp} {colors.dark}` },
        '&:hover': {
          bgColor: '{colors.dark}',
          ...textStyles
        }
      }
    }
  }
});

const options = Array(11).fill(0);
interface Props extends React.ComponentPropsWithoutRef<'button'> {
  contentName: string;
  stepName: string;
  elementName: string;
}
export default function ({ className, contentName, stepName, elementName }: Props) {
  const currentMultiply = useCurrentMultiply();
  const optionBodyRef = useRef<HTMLDivElement>(null);
  if (!currentMultiply) return;
  // if (!currentMultiply) return <IconSkeletonReact className={css({ mb: '2rem' })} />;
  const multiplyNumber = currentMultiply[elementName];
  return (
    <div className={cx(className, css({ pos: 'relative' }))}>
      <button
        type="button"
        onClick={() => optionToggle(optionBodyRef)}
        className={cx(
          elementColorCVA({ [elementName]: 'bo' }),
          css({
            w: '100%',
            d: 'grid',
            gridTemplateRows: 'auto auto',
            justifyContent: 'center',
            bgColor: '{colors.gray}',
            radius: '4px',
            filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, .4)) drop-shadow(2px 2px 2px rgba(0, 0, 0, .2))',
            pos: 'relative',
            '&::before': {
              content: '""',
              d: 'block',
              bgImage: 'url(/images/bg-pattern-dark-one.png)',
              opacity: '0.15',
              bgSize: 'cover',
              bgPos: 'center',
              pos: 'absolute',
              inset: 0,
              zIndex: '-1'
            },
            '&::after': {
              content: '""',
              d: 'block',
              w: '1rem',
              h: '.75rem',
              radius: '4px',
              bgColor: 'currentcolor',
              clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
              mx: 'auto',
              mb: '.5rem'
            }
          })
        )}>
        <span
          className={css({
            d: 'grid',
            placeItems: 'center',
            aspectRatio: '1/1',
            w: 'fit-content',
            my: '.5rem',
            radius: '100px',
            ...elementColorCVA.raw({ [elementName]: 'bg' }),
            color: '{colors.gray}',
            fontWeight: '900',
            textShadow: textShadowProp
          })}>
          {multiplyNumber}
        </span>
      </button>
      <div
        ref={optionBodyRef}
        className={css({
          w: '100%',
          ...elementColorCVA.raw({ [elementName]: 'bo' }),
          bgColor: '{colors.gray}',
          fontWeight: '700',
          textAlign: 'center',
          lineHeight: 1,
          pos: 'absolute',
          top: '100%',
          left: 0,
          d: 'none',
          '&[data-open]': { d: 'block' }
        })}>
        {options.map((_, i) => {
          return (
            <button
              key={i}
              data-value={i}
              type="button"
              onClick={e => optionHandler(e, optionBodyRef, contentName, stepName, elementName)}
              className={css({
                d: 'block',
                w: '100%',
                pd: '.25rem',
                '&+&': { bt: `${boProp} {colors.${elementName}}` },
                '&:hover': {
                  bgColor: `{colors.${elementName}}`,
                  ...textStyles
                }

                // ...elementColorCVA.raw({ [elementName]: 'option' })
              })}>
              {i}
            </button>
          );
        })}
      </div>
    </div>
  );
}
function optionToggle(optionBodyRef: RefObject<HTMLDivElement>) {
  optionBodyRef.current?.toggleAttribute('data-open');
}
function optionHandler(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  optionBodyRef: RefObject<HTMLDivElement>,
  contentName: string,
  stepName: string,
  elementName: string
) {
  const target = e.target as HTMLButtonElement;
  const multiplyNumber = parseInt(target.dataset.value!);
  const multiplyEntry = { [elementName]: multiplyNumber } as MultiplyOption;
  setMultiply({ contentName, stepName, multiplyEntry });
  optionToggle(optionBodyRef);
}
