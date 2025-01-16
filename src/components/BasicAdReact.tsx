import AdmaxReact from 'src/components/AdmaxReact';
import SubModalBtnReact from 'src/components/internal/SubModalBtnReact';
import { useAdStore } from 'src/stores/adStore';
import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  viewAdRemoveBtn?: boolean;
}
export default function ({ className }: Props) {
  const { isRemove } = useAdStore();
  // const adBoxRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const adBoxDOM = adBoxRef.current;
  //   if (adBoxDOM) {
  //     const adScriptDOM = createAdScreptDOM();
  //     adBoxDOM.appendChild(adScriptDOM); //広告をレンダリングする
  //   }
  // }, [isRemove]);

  return (
    <div
      className={cx(
        className,
        css({
          w: '100%',
          maxW: '468px',
          pos: 'sticky',
          left: 0,
          bottom: 0,
          zIndex: 1000,
          minH: '50px',
          mt: '2rem'
        })
      )}
      style={{ display: isRemove ? 'none' : undefined }}>
      <SubModalBtnReact
        id="ad-remove-menu"
        aria-label="広告削除メニューを開く"
        className={css({
          d: 'block',
          pos: 'absolute',
          top: '-2.625rem',
          right: 0,
          zIndex: 1000,
          radius: '100px 0 0 0',
          bgColor: '#ccc',
          bo: '1px solid {colors.ok}',
          pd: '.5rem 1px 1px .5rem',
          '&::before': {
            content: '""',
            d: 'block',
            w: '2rem',
            aspectRatio: '1/1',
            bgImage: 'url(/images/icon/ui/ad-remove.svg)',
            bgSize: '100%'
          }
        })}
      />
      <div
        // ref={adBoxRef}
        className={css({
          d: 'grid',
          justifyContent: 'end',
          bgColor: 'rgba(0, 0, 0, .5)',
          backdropFilter: 'blur(2px)'
        })}>
        <AdmaxReact id="daf18ae5ecbb9592d00b07f489a345db" />
      </div>
    </div>
  );
}
