import ImageReact from 'src/components/internal/ImageReact';
import type { TreasuresData } from 'src/helpers/createContentsData';
import { useCurrentElementChange } from 'src/stores/elementChangeStore';

interface Props extends React.ComponentPropsWithoutRef<'img'> {
  targets: TreasuresData;
}
export default function ({ className, targets }: Props) {
  const currentElementChange = useCurrentElementChange();
  const target = targets.find(target => target.element === currentElementChange);
  return (
    <ImageReact
      className={className}
      src={`/images/thumbnail/treasure/${target?.name}.jpg`}
      alt={target?.label}
      width={280}
      height={160}
    />
  );
}
