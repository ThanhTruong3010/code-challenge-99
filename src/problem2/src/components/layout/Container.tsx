import React from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  fluid,
  style,
  ...rest
}) => {
  const containerClasses = twMerge(
    "w-full px-6",
    "mx-auto",
    !fluid && "min-[768px]:max-w-[1328px]", // 1280 + px-6 = 24 + 1280 + 24 = 1328
    !fluid && "min-[1440px]:max-w-[1648px]", // 1600 + px-6 = 24 + 1600 + 24 = 1648
    fluid && "min-[1440px]:px-20 overflow-hidden",
    className
  );

  return (
    <div className={containerClasses} style={style} {...rest}>
      {children}
    </div>
  );
};
export default Container;
