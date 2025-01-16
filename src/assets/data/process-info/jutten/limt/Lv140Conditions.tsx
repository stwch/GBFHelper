import PwithBulletReact from 'src/components/PwithBulletReact';
import type { ProcessInfoBodyProps } from 'src/helpers/createContentsData';

export default function ({ content }: ProcessInfoBodyProps) {
  return (
    <>
      <PwithBulletReact>全ての十天衆を最終上限解放済み</PwithBulletReact>
      <PwithBulletReact>{content?.label}のLv130</PwithBulletReact>
    </>
  );
}
