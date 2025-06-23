export const Overlay = () => {
  return (
    <div className="absolute bottom-6 left-8 pointer-events-none bg-black">
      <div className="flex items-center gap-4">
        <OverlayButton text="Resume" link="#" onHover={() => {}} />
        <OverlayButton text="Resume" link="#" onHover={() => {}} />
        <OverlayButton text="Resume" link="#" onHover={() => {}} />
      </div>
    </div>
  );
};

export const OverlayButton = ({
  text,
  link,
  onHover,
}: {
  text: string;
  link: string;
  onHover: any;
}) => {
  return (
    <a
      href={link}
      className="text-white text-sm opacity-50 hover:opacity-90 transition-opacity cursor-pointer pointer-events-auto"
      onMouseEnter={onHover}
    >
      {text}
    </a>
  );
};
