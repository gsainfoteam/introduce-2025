import cn from "src/utils/cn";

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  mode: "dark" | "light";
}

const HamburgerIcon = ({ isOpen, onClick, mode }: HamburgerIconProps) => {
  return (
    <button
      className="flex flex-col justify-center items-center w-8 h-8 gap-[5px] relative z-50"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <span
        className={cn(
          "w-6 h-[2px] transition-all duration-300",
          mode === "dark" ? "bg-white" : "bg-dark",
          isOpen && "rotate-45 translate-y-[7px]"
        )}
      />
      <span
        className={cn(
          "w-6 h-[2px] transition-all duration-300",
          mode === "dark" ? "bg-white" : "bg-dark",
          isOpen && "opacity-0"
        )}
      />
      <span
        className={cn(
          "w-6 h-[2px] transition-all duration-300",
          mode === "dark" ? "bg-white" : "bg-dark",
          isOpen && "-rotate-45 -translate-y-[7px]"
        )}
      />
    </button>
  );
};

export default HamburgerIcon;