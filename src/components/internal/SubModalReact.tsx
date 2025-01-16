import clientSideText from 'src/assets/data/clientSideText';
import { css, cx } from 'styled-system/css';

const { titleIconText, closeBtn } = clientSideText;

interface Props extends React.ComponentPropsWithoutRef<'dialog'> {
  modalTitle: string;
}
export default function ({ className, id = '', modalTitle, children }: Props) {
  function modalCloseHandler() {
    const dialogDOM = document.getElementById(id) as HTMLDialogElement;
    dialogDOM.close();
  }
  return (
    <dialog
      id={id}
      className={cx(
        className,
        css({
          // maxW: '{sizes.maxSp}',
          maxW: '468px',
          maxH: '75svh',
          w: '100%',
          bgColor: '{colors.bg}',
          pos: 'fixed',
          top: '50%',
          left: 0,
          translate: '0 -50%',
          '&::backdrop': {
            bgColor: 'rgba(0, 0, 0, .5)'
          },
          //scroll styles
          overscrollBehaviorY: 'none',
          containerName: 'modal',
          overflowY: 'auto',
          '@supports selector(::-webkit-scrollbar)': {
            '&::-webkit-scrollbar': {
              w: '.5rem',
              bgColor: '{colors.bg}'
            },
            '&::-webkit-scrollbar-thumb': {
              w: '.5rem',
              bgColor: '{colors.gray}',
              radius: '100px'
              // bo: '1px solid {colors.bg}'
            }
          },
          '@supports not selector(::-webkit-scrollbar)': {
            scrollbarWidth: 'thin',
            scrollbarColor: '{colors.bg} {colors.gray}'
          }
        })
      )}>
      <section>
        <h3
          className={css({
            d: 'grid',
            gridTemplateColumns: 'auto auto',
            columnGap: '.125rem',
            justifyContent: 'center',
            alignItems: 'center',
            bgColor: '{colors.gray}',
            fontSize: '.875rem',
            fontWeight: '700',
            lineHeight: 1,
            pd: '.25rem .125rem',
            pos: 'relative',
            zIndex: 1,
            '&::before': {
              content: '""',
              d: 'block',
              bgImage: 'url(/images/bg-pattern-dark.png)',
              opacity: '0.2',
              bgSize: 'contain',
              pos: 'absolute',
              inset: 0,
              zIndex: '-1'
            }
          })}>
          <span
            className={css({
              d: 'grid',
              placeItems: 'center',
              w: '.75rem',
              color: '{colors.gray}',
              fontSize: '.75rem',
              fontWeight: '700',
              lineHeight: 1,
              bgColor: '{colors.bg}',
              radius: '100px'
            })}>
            {titleIconText}
          </span>
          {modalTitle}
        </h3>
        <div className={css({ py: '{spacing.row.section}' })}>
          {children}
          <button
            type="button"
            onClick={modalCloseHandler}
            className={css({
              d: 'block',
              w: 'fit-content',
              fontSize: '.875rem',
              fontWeight: '600',
              px: '.75rem',
              mt: '{spacing.row.section}',
              mx: 'auto',
              bgColor: '{colors.gray}',
              radius: '100px',
              boxShadow: '0px 1px 4px #000, inset 0px 0px 3px {colors.cancel}',
              bo: '1px solid {colors.cancel}'
            })}>
            {closeBtn}
          </button>
        </div>
      </section>
    </dialog>
  );
}
