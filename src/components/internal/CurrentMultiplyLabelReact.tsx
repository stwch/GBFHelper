import { useCurrentMultiply } from 'src/stores/multiplyStore';
import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'span'> {}
export default function ({ className }: Props) {
  const currentMultiply = useCurrentMultiply();
  if (!currentMultiply) return;
  // if (!currentMultiply) return <IconSkeletonReact className={cx(css({ d: 'block' }), skeletonClassName)} />;
  const { total, ...elementMultiply } = currentMultiply;
  const multiplyEntries = Object.entries(elementMultiply);
  return (
    <span
      className={cx(
        className,
        css({
          w: 'fit-content',
          d: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          columnGap: '.125rem'
        })
      )}>
      {multiplyEntries.map(multiplyEntry => {
        const [name, value] = multiplyEntry;
        return (
          <span
            key={name}
            className={css({
              d: 'grid',
              placeItems: 'center',
              aspectRatio: '1/1',
              fontWeight: '900',
              radius: '100px',
              bgColor: `{colors.${name}}`,
              color: '{colors.gray}',
              textShadow: '1px 1px 2px rgba(0, 0, 0, .5), 0 0 1px rgba(0, 0, 0, 1)'
            })}>
            {value}
          </span>
        );
      })}
    </span>
  );
}
