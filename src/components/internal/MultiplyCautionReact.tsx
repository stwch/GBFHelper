import clientSideText from 'src/assets/data/clientSideText';
import SubModalBtnReact from 'src/components/internal/SubModalBtnReact';
import SubModalReact from 'src/components/internal/SubModalReact';
import PReact from 'src/components/PReact';
import { recommendTotalEntries, useCurrentMultiply, type NeedMultiplyCategory } from 'src/stores/multiplyStore';
import { css } from 'styled-system/css';

const {
  multiplyCaution_start,
  multiplyCaution_end,
  multiplyOver,
  multiplySmall_start,
  multiplySmall_end,
  multiplyRecommend_start,
  multiplyRecommend_end,
  multiplyContinue,
  cautionModalTitle,
  cautionModalBtn
} = clientSideText;

const modalID = 'multiplyID';
const cautionColor = 'hsl(0, {colors.saturation}, 60%)';
interface Props extends React.ComponentPropsWithoutRef<'div'> {
  categoryName: NeedMultiplyCategory;
}
export default function ({ categoryName }: Props) {
  const currentMultiply = useCurrentMultiply();
  if (!currentMultiply) return;
  const recommendTotal = recommendTotalEntries[categoryName];
  const { total } = currentMultiply;
  const isOver = total > recommendTotal;
  const isSmall = total < recommendTotal;
  const needCaution = isOver || isSmall;
  return (
    needCaution && (
      <>
        <div
          className={css({
            mt: '{spacing.row.section}',
            bgColor: '{colors.gray}',
            pd: '.5rem',
            bo: `1px solid ${cautionColor}`,
            radius: '2px'
          })}>
          <PReact>
            {multiplyCaution_start}
            {total}
            {multiplyCaution_end}
          </PReact>
          <SubModalBtnReact
            type="button"
            id={modalID}
            className={css({
              boxShadow: `inset 0 0 8px ${cautionColor}, 1px 1px 2px rgba(0, 0, 0, .5)`,
              px: '.5rem',
              pb: '.125rem',
              radius: '100px',
              fontSize: '.75rem'
            })}>
            {cautionModalBtn}
          </SubModalBtnReact>
        </div>

        <SubModalReact
          id={modalID}
          modalTitle={cautionModalTitle}
          className={css({ bo: `1px solid ${cautionColor}` })}>
          <div
            className={css({
              color: '{colors.gray}',
              px: '1rem'
            })}>
            {isOver && (
              <PReact>
                {recommendTotal}
                {multiplyOver}
              </PReact>
            )}
            {isSmall && (
              <PReact>
                {multiplySmall_start}
                {recommendTotal}
                {multiplySmall_end}
              </PReact>
            )}
            <PReact>
              {multiplyRecommend_start}
              {recommendTotal}
              {multiplyRecommend_end}
            </PReact>
            <PReact>{multiplyContinue}</PReact>
          </div>
        </SubModalReact>
      </>
    )
  );
}
