import Image, { ImageProps } from "next/image";

const ImageComponent = ({
  fill,
  addPlaceholder = true,
  ...props
}: ImageProps & { className?: string; alt: string; addPlaceholder?: boolean }) => {
  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII=";
    
  return (
    <Image
      {...props}
      alt={props.alt}
      className={props.className}
      {...(addPlaceholder && {
        placeholder: "blur",
        blurDataURL: blurDataURL,
      })}
      {...(fill
        ? { fill }
        : { width: props.width || 200, height: props.height || 300 })}
    />
  );
};

export default ImageComponent;
