import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'span'> {}
export default function ({ className }: Props) {
  return <span className={cx(className, css({ d: 'block', w: 'min(5svw, 48px)', aspectRatio: '1/1' }))} />;
}
