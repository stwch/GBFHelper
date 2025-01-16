import PwithBulletReact from 'src/components/PwithBulletReact';
import type { ProcessInfoBodyProps } from 'src/helpers/createContentsData';

export default function ({ content }: ProcessInfoBodyProps) {
  return (
    <>
      <PwithBulletReact>Rank150 以上</PwithBulletReact>
      <PwithBulletReact>{content?.label}の覚醒Lv7 以上</PwithBulletReact>
      <PwithBulletReact>{content?.label}の4アビを習得済み</PwithBulletReact>
    </>
  );
}
