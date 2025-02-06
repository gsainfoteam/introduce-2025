import { useTranslation } from "react-i18next";
import cn from "src/utils/cn";

import { HeaderProps } from ".";

interface LocaleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<HeaderProps, "mode"> {
  isSelected: boolean;
}

const LocaleButton = ({
  isSelected,
  children,
  mode,
  ...props
}: LocaleButtonProps) => {
  return (
    <button
      aria-pressed={isSelected}
      role="radio"
      aria-label={`select language: ${children}`}
      {...props}
      className={cn(
        mode === "dark"
          ? [
              "bg-transparent",
              isSelected ? "bg-white" : "text-grey hover:bg-neutral-900",
            ]
          : [
              "bg-transparent",
              isSelected ? "bg-white" : "text-grey-light hover:bg-neutral-200",
            ],
        "rounded-sm py-[2px] w-14 cursor-pointer transition hover:scale-95 font-semibold text-sm",
      )}
    >
      {children}
    </button>
  );
};

interface LocaleSelectorProps extends Pick<HeaderProps, "mode"> {}

const LocaleSelector = ({ mode }: LocaleSelectorProps) => {
  const { i18n } = useTranslation();
  const locales = [
    { code: "ko-KR", displayName: "KOR" },
    { code: "en-US", displayName: "ENG" },
  ];

  return (
    <div
      className={cn(
        "p-[5px] rounded-lg flex gap-2",
        mode === "dark" ? "bg-bg-dark-light" : "bg-bg-light",
      )}
    >
      {locales.map(({ code, displayName }) => (
        <LocaleButton
          key={code}
          mode={mode}
          isSelected={i18n.language === code}
          onClick={() => i18n.changeLanguage(code)}
        >
          {displayName}
        </LocaleButton>
      ))}
    </div>
  );
};

export default LocaleSelector;
