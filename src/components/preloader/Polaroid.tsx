export type PolaroidImage = {
  src: string;
  description?: string;
};

export const Polaroid = ({ image }: { image: PolaroidImage }) => {
  return (
    <div className="w-56 aspect-[0.85] bg-white p-3 border-1 border-gray-300">
      <img
        src={image.src}
        alt="img"
        className="aspect-square backdrop-blur-sm opacity-90 contrast-75 brightness-95"
      />
    </div>
  );
};
