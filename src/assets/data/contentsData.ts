import { eiyuuClass5Data, eiyuuEx2Data, eiyuuNewClass4Data, eiyuuOldClass4Data } from 'src/assets/data/eiyuu';
import { jukkenData } from 'src/assets/data/jukken';
import { juttenData } from 'src/assets/data/jutten';
import { juttenKyokuseiData } from 'src/assets/data/jutten-kyokusei';
import { syuumatuKamiData, syuumatuMagunaData } from 'src/assets/data/syuumatu';
import type createContentsData from 'src/helpers/createContentsData';

export default [
  juttenData,
  juttenKyokuseiData,
  jukkenData,
  syuumatuMagunaData,
  syuumatuKamiData,
  eiyuuOldClass4Data,
  eiyuuNewClass4Data,
  eiyuuEx2Data,
  eiyuuClass5Data
] as ReturnType<typeof createContentsData>[];
