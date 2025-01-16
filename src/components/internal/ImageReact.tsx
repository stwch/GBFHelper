interface Props extends React.ComponentPropsWithoutRef<'img'> {
  imageMetaData?: ImageMetadata;
}
export default function ({ className, src, alt, width, height, imageMetaData, ...attr }: Props) {
  return (
    <img
      className={className}
      src={src ?? imageMetaData?.src}
      alt={alt}
      width={width ?? imageMetaData?.width}
      height={height ?? imageMetaData?.height}
      loading="lazy"
      decoding="async"
      {...attr}
    />
  );
}
