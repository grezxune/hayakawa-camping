import Image from "next/image";

export const Photo = ({ filename, caption }) => {
  const imageSize = 200;

  return (
    <div>
      <div className={`w-[${imageSize}px] h-[${imageSize}px] flex items-center`}>
        <Image
          src={`/images/${filename}`}
          alt={caption}
          width={imageSize}
          height={imageSize}
          priority
        />
      </div>

      {!!caption && (
        <p>{caption}</p>
      )}
    </div>
  );
}
