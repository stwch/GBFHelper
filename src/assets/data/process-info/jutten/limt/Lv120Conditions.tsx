import PwithBulletReact from 'src/components/PwithBulletReact';
import type { ProcessInfoBodyProps } from 'src/helpers/createContentsData';

export default function ({ content }: ProcessInfoBodyProps) {
  return (
    <>
      <PwithBulletReact>全ての十天衆が加入済み</PwithBulletReact>
      <PwithBulletReact>{content?.label}のLv110</PwithBulletReact>
    </>
  );
}
