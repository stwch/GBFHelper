import PwithBulletReact from 'src/components/PwithBulletReact';
import type { ProcessInfoBodyProps } from 'src/helpers/createContentsData';

export default function ({ content }: ProcessInfoBodyProps) {
  return (
    <>
      <PwithBulletReact>
        開始条件：<br />
        {content?.label}の天星器をメイン装備
      </PwithBulletReact>
      <PwithBulletReact>
        装備する天星器の強化段階は問わない
      </PwithBulletReact>
    </>
  );
}
