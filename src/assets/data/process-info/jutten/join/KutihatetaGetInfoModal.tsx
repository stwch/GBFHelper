import dhimenjonImg from 'public/images/info/dhimenjon-heiro.png';
import heiroProImg from 'public/images/info/enjeru-heiro-pro.png';
import heiroImg from 'public/images/info/enjeru-heiro-vh.png';
import yowabahaImg from 'public/images/info/kaikou-kokugin-no-tubasa.png';
import InfoModalP from 'src/assets/data/process-info/_internal/InfoModalP';
import InfoModalPWithBullets from 'src/assets/data/process-info/_internal/InfoModalPWithBullets';
import InfoModalSection from 'src/assets/data/process-info/_internal/InfoModalSection';
import ImageReact from 'src/components/internal/ImageReact';
import { css } from 'styled-system/css';

const imgClassName = css({ w: '25%' });

export default function () {
  return (
    <>
      <InfoModalSection title="朽ち果てた武器の入手方法">
        <InfoModalPWithBullets bulletTexts={['大量に必要な属性素材を同時に入手可能']}>
          <ImageReact
            imageMetaData={heiroImg}
            alt="エンジェル・ヘイロー"
            className={imgClassName}
          />
          エンジェル・ヘイロー
        </InfoModalPWithBullets>
        <InfoModalPWithBullets bulletTexts={['朽ち果てた武器だけ欲しいならこちら']}>
          <ImageReact
            imageMetaData={yowabahaImg}
            alt="邂逅・黒銀の翼"
            className={imgClassName}
          />
          邂逅・黒銀の翼（マルチ救援）
        </InfoModalPWithBullets>
      </InfoModalSection>
      <InfoModalSection title="ディメンジョン・ヘイローについて">
        <InfoModalP className={css({ w: '33%' })}>
          <ImageReact
            imageMetaData={dhimenjonImg}
            alt="ディメンジョン・ヘイロー"
          />
        </InfoModalP>
        <InfoModalPWithBullets bulletTexts={['編成した十天衆の【最終解放・限界超越】に必要な素材をドロップ']}>
          出現したら十天衆を編成して周回する
        </InfoModalPWithBullets>
        <InfoModalP>十天衆を編成しないと周回する意味がない</InfoModalP>
        <InfoModalP>
          十天衆が仲間にいなくても1回はクリアして【エンジェル・ヘイローPro】を解放する
          <ImageReact
            imageMetaData={heiroProImg}
            alt="エンジェル・ヘイローPro"
            className={css({ w: '50%' })}
          />
        </InfoModalP>
      </InfoModalSection>
      <InfoModalSection title="ポイントなど">
        <InfoModalPWithBullets bulletTexts={['十天衆を【最終解放・限界超越】する際に大量に必要なため']}>
          入手した朽ち果てた武器は全てとっておく
        </InfoModalPWithBullets>
      </InfoModalSection>
    </>
  );
}
