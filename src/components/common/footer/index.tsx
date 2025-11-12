import cn from "src/utils/cn";

export interface FooterProps {
  mode?: "dark" | "light";
}

const Footer = ({ mode = "light" }: FooterProps) => {
  return (
    <footer
      className={cn(
        "w-full flex justify-center py-8 md:py-12",
        mode === "dark"
          ? "bg-dark border-t border-neutral-600"
          : "bg-white border-t border-border",
      )}
    >
      <div className="content flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="text-sm md:text-base text-center md:text-left">
          <p
            className={cn(
              "tracking-tight",
              mode === "dark" ? "text-white" : "text-dark",
            )}
          >
            © {new Date().getFullYear()} Infoteam. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="mailto:contact@gistory.me"
            className={cn(
              "text-sm md:text-base tracking-tight py-1 px-2.5 rounded-lg transition hover:scale-95",
              mode === "dark"
                ? "text-white hover:bg-bg-dark-light"
                : "text-dark hover:bg-bg-light",
            )}
            aria-label="Contact email"
          >
            contact@gistory.me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
