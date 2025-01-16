import PwithBulletReact from 'src/components/PwithBulletReact';
import type { ProcessInfoBodyProps } from 'src/helpers/createContentsData';

const rokutyuuLabels = {
  fire: 'ウィルナス',
  water: 'ワムデュス',
  earth: 'ガレオン',
  wind: 'イーウィア',
  dark: 'フェディエル',
  light: 'ル・オー'
};

export default function ({ content }: ProcessInfoBodyProps) {
  if (!content) return;
  if (!content.element) return;
  const element = content.element.name;
  const rokuryuuLabel = rokutyuuLabels[element as keyof typeof rokutyuuLabels];
  return (
    <>
      <PwithBulletReact>
        同属性の六竜シングルバトルをクリア <br />…{rokuryuuLabel}
      </PwithBulletReact>
      <PwithBulletReact>
        同属性の六竜マルチバトルを自発してクリア <br />…{rokuryuuLabel}
      </PwithBulletReact>
      <PwithBulletReact>{content?.label}のLv120</PwithBulletReact>
    </>
  );
}
