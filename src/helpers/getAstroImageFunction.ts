import getAstroImages from 'src/helpers/getAstroImages';

export default function (imagePath: string) {
  const path = `/src/assets/images/${imagePath}`;
  const images = getAstroImages();
  return images[path];
}
