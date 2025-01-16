import ImageReact from 'src/components/internal/ImageReact';
import type { ContentData } from 'src/helpers/createContentsData';
import { useCurrentElementChange } from 'src/stores/elementChangeStore';
import type { ElementNames } from 'src/type';
import { css, cva, cx } from 'styled-system/css';

const dataAttrName = 'data-current';
const dataSelector = `&[${dataAttrName}]`;
const elementColorCVA = cva({
  variants: {
    element: {
      fire: {
        bo: '1px solid {colors.fire}',
        [dataSelector]: {
          '& > img': {
            filter: 'drop-shadow(0 0 8px {colors.fire})'
          }
        }
      },
      water: {
        bo: '1px solid {colors.water}',
        [dataSelector]: {
          '& > img': {
            filter: 'drop-shadow(0 0 8px {colors.water})'
          }
        }
      },
      earth: {
        bo: '1px solid {colors.earth}',
        [dataSelector]: {
          '& > img': {
            filter: 'drop-shadow(0 0 8px {colors.earth})'
          }
        }
      },
      wind: {
        bo: '1px solid {colors.wind}',
        [dataSelector]: {
          '& > img': {
            filter: 'drop-shadow(0 0 8px {colors.wind})'
          }
        }
      },
      light: {
        bo: '1px solid {colors.light}',
        [dataSelector]: {
          '& > img': {
            filter: 'drop-shadow(0 0 8px {colors.light})'
          }
        }
      },
      dark: {
        bo: '1px solid {colors.dark}',
        [dataSelector]: {
          '& > img': {
            filter: 'drop-shadow(0 0 8px {colors.dark})'
          }
        }
      }
    }
  }
});

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  element: ContentData['element'];
}
export default function ({ className, element }: Props) {
  const currentElementChange = useCurrentElementChange();
  if (!element) throw new Error('contentsData のelement が未定義です');
  const isCurrent = currentElementChange === element.name;
  const dataAttr = isCurrent ? { [dataAttrName]: '' } : {};

  return (
    <span
      {...dataAttr}
      className={cx(
        className,
        elementColorCVA({ element: element.name as ElementNames['name'] }),
        css({
          d: 'block',
          radius: '4px',
          filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, .4)) drop-shadow(2px 2px 2px rgba(0, 0, 0, .2))',
          bgColor: '{colors.gray}',
          pd: '.5rem',
          [dataSelector]: {
            filter: 'drop-shadow(2px 2px 1px rgba(0, 0, 0, .1))'
          },
          pos: 'relative',
          '&::before': {
            content: '""',
            d: 'block',
            bgImage: 'url(/images/bg-pattern-dark-one.png)',
            opacity: '0.2',
            bgSize: 'cover',
            bgPos: 'center',
            pos: 'absolute',
            inset: 0,
            zIndex: '-1'
          }
        })
      )}>
      <ImageReact
        src={`/images/icon/element/${element.name}.png`}
        alt={`${element.label}のアイコン`}
        width={47}
        height={47}
        className={css({
          filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, .6))'
        })}
      />
      {/* {currentElementChange ? (
        <ImageReact
          src={`/images/icon/element/${element.name}.png`}
          alt={`${element.label}のアイコン`}
          width={47}
          height={47}
          className={css({
            w: '1.75rem',
            aspectRatio: '1/1',
            filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, .6))'
          })}
        />
      ) : (
        <span className={css({ d: 'block', w: '1.75rem', aspectRatio: '1/1' })} />
      )} */}
    </span>
  );
}
