import PwithBulletReact from 'src/components/PwithBulletReact';
import type { ProcessInfoBodyProps } from 'src/helpers/createContentsData';

export default function ({ content }: ProcessInfoBodyProps) {
  return (
    <>
      <PwithBulletReact>{content?.label}の超越Lv110 まで解放</PwithBulletReact>
      <PwithBulletReact>{content?.label}の極星ボーナスLv5 に到達</PwithBulletReact>
    </>
  );
}
