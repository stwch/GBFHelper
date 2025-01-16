import TargetTreasureLabelReact from 'src/components/contents-chart/internal/TargetTreasureLabelReact';
import SubModalReact from 'src/components/internal/SubModalReact';
import { useTreasureModal } from 'src/stores/treasureModalStore';
import { css } from 'styled-system/css';

// function modalCloseHandler() {
//   const dialogDOM = document.getElementById('treasure-modal') as HTMLDialogElement;
//   dialogDOM.close();
// }

// const { treasureModalTitle, closeBtn } = clientSideText;

export default function () {
  const currentTreasure = useTreasureModal();
  return (
    <SubModalReact
      id="treasure-modal"
      modalTitle="トレジャー詳細">
      {currentTreasure && (
        <TargetTreasureLabelReact
          target={currentTreasure}
          className={css({
            w: '50%',
            mx: 'auto',
            mb: '{spacing.row.section}'
          })}
        />
      )}
    </SubModalReact>
  );
  // return (
  //   <dialog
  //     id="treasure-modal"
  //     className={cx(
  //       className,
  //       css({
  //         maxW: '{sizes.maxSp}',
  //         w: '100%',
  //         bgColor: '{colors.bg}',
  //         pos: 'fixed',
  //         top: '50%',
  //         left: 0,
  //         translate: '0 -50%',
  //         '&::backdrop': {
  //           bgColor: 'rgba(0, 0, 0, .5)'
  //         }
  //       })
  //     )}>
  //     <section>
  //       <h3
  //         className={css({
  //           d: 'grid',
  //           gridTemplateColumns: 'auto auto',
  //           columnGap: '.125rem',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           bgColor: '{colors.gray}',
  //           fontSize: '.875rem',
  //           fontWeight: '700',
  //           lineHeight: 1,
  //           pd: '.25rem .125rem',
  //           pos: 'relative',
  //           zIndex: 1,
  //           '&::before': {
  //             content: '""',
  //             d: 'block',
  //             bgImage: 'url(/images/bg-pattern-dark.png)',
  //             opacity: '0.2',
  //             bgSize: 'contain',
  //             pos: 'absolute',
  //             inset: 0,
  //             zIndex: '-1'
  //           }
  //         })}>
  //         <span
  //           className={css({
  //             d: 'grid',
  //             placeItems: 'center',
  //             w: '.75rem',
  //             color: '{colors.gray}',
  //             fontSize: '.75rem',
  //             fontWeight: '700',
  //             lineHeight: 1,
  //             bgColor: '{colors.bg}',
  //             radius: '100px'
  //           })}>
  //           i
  //         </span>
  //         {treasureModalTitle}
  //       </h3>
  //       <div className={css({ py: '{spacing.row.section}' })}>
  //         {currentTreasure && (
  //           <TargetTreasureLabelReact
  //             target={currentTreasure}
  //             className={css({
  //               w: '50%',
  //               mx: 'auto',
  //               mb: '{spacing.row.section}'
  //             })}
  //           />
  //         )}
  //         <button
  //           type="button"
  //           onClick={modalCloseHandler}
  //           className={css({
  //             d: 'block',
  //             w: 'fit-content',
  //             fontSize: '.875rem',
  //             fontWeight: '600',
  //             px: '.75rem',
  //             mx: 'auto',
  //             bgColor: '{colors.gray}',
  //             radius: '100px',
  //             boxShadow: '0px 1px 4px #000, inset 0px 0px 8px {colors.cancel}',
  //             bo: '1px solid {colors.cancel}'
  //           })}>
  //           {closeBtn}
  //         </button>
  //       </div>
  //     </section>
  //   </dialog>
  // );
}
