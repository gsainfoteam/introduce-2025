import { ClassValue } from "clsx";
import { PropsWithChildren } from "react";
import cn from "src/utils/cn";

interface HeaderProps extends PropsWithChildren {
  className?: ClassValue;
}

export const H2 = ({ children, className }: HeaderProps) => (
  <h2
    className={cn(
      "font-bold text-dark w-full text-center text-5xl my-3",
      className,
    )}
  >
    {children}
  </h2>
);

export const H4 = ({ children, className }: HeaderProps) => (
  <h4
    className={cn("font-bold text-dark w-full text-center text-3xl", className)}
  >
    {children}
  </h4>
);

export const H5 = ({ children, className }: HeaderProps) => (
  <h5
    className={cn(
      "font-medium text-dark w-full text-center text-2xl tracking-tight",
      className,
    )}
  >
    {children}
  </h5>
);

export const ShortHr = () => (
  <hr className="border-b border-border w-[100px]" />
);
