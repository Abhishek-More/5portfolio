import classNames from "classnames";
import type { JSX } from "react";

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
