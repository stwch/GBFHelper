import dorebaraImg from 'public/images/info/dorebara.png';
import kosenjouImg from 'public/images/info/kosenjou.png';
import ImageReact from 'src/components/internal/ImageReact';
import PReact from 'src/components/PReact';
import { css } from 'styled-system/css';

export default function () {
  return (
    <>
      <PReact>天星器は今のところ、【古戦場】か【ドレッドバラージュ】でしか入手できません。</PReact>
      <PReact>開催されるまでは他の素材を集めるのがおすすめです。</PReact>
      <div
        className={css({
          d: 'grid',
          gridTemplateColumns: 'auto auto',
          mt: '{spacing.row.section}'
        })}>
        <ImageReact
          imageMetaData={kosenjouImg}
          alt="古戦場"
        />
        <ImageReact
          imageMetaData={dorebaraImg}
          alt="ドレッドバラージュ"
        />
      </div>
    </>
  );
}
