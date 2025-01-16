import ImageReact from 'src/components/internal/ImageReact';
import { useCurrentElementChange } from 'src/stores/elementChangeStore';
import type { ElementNames } from 'src/type';

const elementNames = {
  fire: ['火', 'fire'],
  water: ['水', 'water'],
  earth: ['土', 'earth'],
  wind: ['風', 'wind'],
  light: ['光', 'light'],
  dark: ['闇', 'dark']
};

interface Props extends React.ComponentPropsWithoutRef<'img'> {}
export default function ({ className }: Props) {
  const currentElementChange = useCurrentElementChange();
  // if (!currentElementChange) return <span className={cx(css({ d: 'block' }), skeletonClassName)} />;
  const [label, name] = elementNames[currentElementChange as ElementNames['name']];
  return (
    <ImageReact
      className={className}
      src={`/images/icon/element/${name}.png`}
      alt={`${label}のアイコン`}
      width={48}
      height={48}
    />
  );
}
