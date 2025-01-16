import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'section'> {
  title: string;
}
export default function ({ children, className, title }: Props) {
  return (
    <section className={cx(className, css({ '&+section': { mt: '{spacing.row.section}' } }))}>
      <h4 className={css({ fontWeight: '700', mb: '{spacing.row.p}', fontSize: '1rem' })}>{title}</h4>
      {children}
    </section>
  );
}
