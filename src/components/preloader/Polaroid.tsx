export type PolaroidImage = {
  src: string;
  description?: string;
  signature?: string;
};

export const Polaroid = ({
  image,
  showSignature = false,
}: {
  image: PolaroidImage;
  showSignature?: boolean;
}) => {
  return (
    <div className="w-56 aspect-[0.85] bg-white p-3 border-1 border-gray-300 flex flex-col">
      <img
        src={image.src}
        alt="img"
        className="aspect-square backdrop-blur-sm opacity-90 contrast-75 brightness-95 object-cover object-bottom"
      />
      {image.signature && showSignature && (
        <div className="flex-1 relative">
          <span
            className="absolute bottom-0 text-black text-sm select-none"
            style={{
              fontFamily: "'Permanent Marker', 'Kalam', cursive",
              filter: "blur(0.2px)",
              opacity: 0.9,
              fontWeight: 900,
              fontSize: "1.2rem",
              left: `${Math.random() * 20 + 10}%`,
              bottom: `${Math.random() * 10 + 5}px`,
              transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
            }}
          >
            {image.signature}
          </span>
        </div>
      )}
    </div>
  );
};
