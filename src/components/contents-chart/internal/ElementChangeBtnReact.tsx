import ElementChangeBtnLabelReact from 'src/components/internal/ElementChangeBtnLabelReact';
import type { ContentData } from 'src/helpers/createContentsData';
import { setElementChange, useCurrentElementChange } from 'src/stores/elementChangeStore';
import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  element: ContentData['element'];
  contentName: string;
  stepName: string;
}
export default function ({ className, element, contentName, stepName }: Props) {
  const currentElementChange = useCurrentElementChange();
  if (!element) throw new Error(`${contentName}-${stepName} のelement が未定義です`);
  const isCurrent = currentElementChange === element.name;

  return (
    <button
      type="button"
      className={cx(
        className,
        css({
          d: 'block',
          pointerEvents: isCurrent ? 'none' : undefined
        })
      )}
      onClick={() => setElementChange({ contentName, stepName, elementName: element.name })}>
      <ElementChangeBtnLabelReact element={element} />
    </button>
  );
}
