import { useTranslation } from "react-i18next";
import cn from "src/utils/cn";

export interface FooterProps {
  mode?: "dark" | "light";
}

const Footer = ({ mode = "light" }: FooterProps) => {
  const { t } = useTranslation();

  const services = [
    { name: t("footer.ziggle"), url: "https://ziggle.gistory.me" },
    { name: t("footer.bbun"), url: "https://bbun.gistory.me" },
    { name: t("footer.account"), url: "https://account.gistory.me" },
    { name: t("footer.potg"), url: "https://pot-g.gistory.me" },
  ];

  return (
    <footer
      className={cn(
        "w-full flex justify-center py-8 md:py-12",
        mode === "dark"
          ? "bg-dark border-t border-neutral-600"
          : "bg-white border-t border-border",
      )}
    >
      <div className="content flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <h3
            className={cn(
              "text-sm md:text-base font-semibold",
              mode === "dark" ? "text-white" : "text-dark",
            )}
          >
            {t("footer.services")}
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {services.map((service, index) => (
              <div key={service.url} className="flex items-center">
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-sm md:text-base tracking-tight py-1.5 px-3 rounded-lg transition-colors",
                    mode === "dark"
                      ? "text-neutral-300 hover:text-white hover:bg-neutral-800"
                      : "text-neutral-600 hover:text-dark hover:bg-neutral-100",
                  )}
                  aria-label={service.name}
                >
                  {service.name}
                </a>
                {index < services.length - 1 && (
                  <span
                    className={cn(
                      "mx-2 text-xs",
                      mode === "dark" ? "text-neutral-600" : "text-neutral-300",
                    )}
                  >
                    ·
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:items-end gap-2 w-full md:w-auto">
          <a
            href="mailto:contact@gistory.me"
            className={cn(
              "text-sm md:text-base tracking-tight py-1.5 px-3 rounded-lg transition-colors",
              mode === "dark"
                ? "text-neutral-300 hover:text-white hover:bg-neutral-800"
                : "text-neutral-600 hover:text-dark hover:bg-neutral-100",
            )}
            aria-label="Contact email"
          >
            contact@gistory.me
          </a>
          <p
            className={cn(
              "text-xs md:text-sm tracking-tight",
              mode === "dark" ? "text-neutral-400" : "text-neutral-500",
            )}
          >
            © {new Date().getFullYear()} Infoteam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
