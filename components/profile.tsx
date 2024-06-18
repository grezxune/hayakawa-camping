import Image from "next/image";

export const Profile = ({ filename, caption }) => {
  const imageSize = 200;

  return (
    <div className="p-2 flex flex-col items-center text-center">
      <div className={`w-[${imageSize}px] h-[${imageSize}px] overflow-hidden rounded-full flex items-center`}>
        <Image
          src={`/images/${filename}`}
          alt={caption}
          width={imageSize}
          height={imageSize}
          priority
          className={`rounded-full aspect-square`}
        />
      </div>

      <p className="text-lg">{caption}</p>
    </div>
  );
}
