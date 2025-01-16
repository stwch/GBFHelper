import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'span'> {}
export default function ({ className }: Props) {
  // return <span className={cx(className, css({ d: 'block', w: 'min(35svw, 174px)', aspectRatio: '280/160' }))} />;
  return (
    <span className={cx(className, css({ d: 'block', w: 'clamp(100px,40svw, 280px)', aspectRatio: '280/160' }))} />
  );
}
