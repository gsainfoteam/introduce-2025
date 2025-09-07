import { HTMLAttributes, ReactNode } from "react";
import cn from "src/utils/cn";

interface CellophaneButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const CellophaneButton = ({
  children,
  className,
  ...props
}: CellophaneButtonProps) => {
  return (
    <button
      className={cn(
        "px-9 py-4 bg-white/20 rounded-lg border-white border cursor-pointer hover:bg-white/30 transition text-white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CellophaneButton;
