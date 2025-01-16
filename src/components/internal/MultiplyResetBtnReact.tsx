import clientSideText from 'src/assets/data/clientSideText';
import { intialMultiplyEntries, resetMultiply, type NeedMultiplyCategory } from 'src/stores/multiplyStore';
import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  contentName: string;
  stepName: string;
  categoryName: NeedMultiplyCategory;
}
export default function ({ className, contentName, stepName, categoryName }: Props) {
  const initialMultiply = intialMultiplyEntries[categoryName];
  return (
    <button
      type="button"
      onClick={() => resetMultiply({ contentName, stepName, initialMultiply })}
      className={cx(
        className,
        css({
          radius: '100px',
          boxShadow: '1px 1px 2px rgba(0, 0, 0, .5), inset 0 0 8px 1px rgba(0, 0, 0, .2)',
          bgColor: '{colors.gray}',
          px: '.5rem',
          fontSize: '.875rem'
        })
      )}>
      {clientSideText.resetBtn}
    </button>
  );
}
