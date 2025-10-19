import classNames from "classnames";

export const Page = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={classNames("h-screen w-screen", className)}>{children}</div>
  );
};
