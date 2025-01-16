import InfoModalP from 'src/assets/data/process-info/_internal/InfoModalP';
import PwithBulletReact from 'src/components/PwithBulletReact';
import { css } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'p'> {
  bulletTexts: string[];
}
export default function ({ children, bulletTexts }: Props) {
  return (
    <InfoModalP objectStart={true}>
      {children}
      <span className={css({ d: 'block' })}>
        {bulletTexts.map(text => {
          return (
            <PwithBulletReact
              asSpan={true}
              className={css({ fontWeight: '400' })}>
              {text}
            </PwithBulletReact>
          );
        })}
      </span>
    </InfoModalP>
  );
}
