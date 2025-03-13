import { useState } from 'react';
import AdmaxReact from 'src/components/AdmaxReact';
import SubModalReact from 'src/components/internal/SubModalReact';
import PReact from 'src/components/PReact';
import { setAdStore } from 'src/stores/adStore';
import { css } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'dialog'> {}
export default function ({}: Props) {
  const [isClicked, setClicked] = useState(false);
  return (
    <SubModalReact
      id="ad-remove-menu"
      modalTitle="広告削除メニュー">
      <div
        className={css({
          color: '{colors.gray}',
          px: '1rem',
          textAlign: 'center',
          mb: '{spacing.row.section}',
        })}>
        {isClicked ? (
          <PReact>
            広告枠を削除しました。
            <br />
            今から24時間表示されません。
          </PReact>
        ) : (
          <PReact>当サイトのすべての広告枠を24時間削除できます。</PReact>
        )}
      </div>
      {!isClicked && (
        <>
          <button
            type="button"
            onClick={() => {
              // _renderAd(adBoxRef);
              setClicked(true);
              setAdStore({ isRemove: true, time: Date.now() });
            }}
            className={css({
              d: 'block',
              fontSize: '.75rem',
              pd: '.125rem 1rem .25rem 1rem',
              bgColor: '{colors.gray}',
              bo: '1px solid {colors.ok}',
              radius: '2px',
              mx: 'auto',
              mb: '{spacing.row.p}',
            })}>
            バナー広告を表示して広告枠を削除
          </button>
          <PReact
            className={css({
              color: '{colors.gray}',
              textAlign: 'center',
            })}>
            ・アダルト広告は表示されません。
            <br />
            ・表示した瞬間から削除されます。
          </PReact>
        </>
      )}

      <div
        className={css({
          my: '2rem',
          d: 'grid',
          justifyContent: 'center',
        })}
        style={{ display: isClicked ? undefined : 'none' }}>
        <AdmaxReact id="b7af2404cb763bb43462279c0a9cd789" />
      </div>
    </SubModalReact>
  );
}
