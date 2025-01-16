import { css } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'span'> {
  text?: string;
}
export default function ({ children, text }: Props) {
  return <span className={css({ fontWeight: '700' })}>{text ?? children}</span>;
}
