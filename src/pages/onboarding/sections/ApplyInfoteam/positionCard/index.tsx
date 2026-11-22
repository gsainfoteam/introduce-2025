import { Link } from "@tanstack/react-router";
import { Trans } from "react-i18next";
import cn from "src/utils/cn";

interface PositionCardProps {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
  bgColor: string;
}

const PositionCard = ({
  title,
  subtitle,
  description,
  link,
  bgColor,
}: PositionCardProps) => {
  const content = (
    <div
      className="flex h-[200px] rounded-lg overflow-clip"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-[250px] h-full px-5 py-4 flex flex-col justify-between">
        <div>
          <h1 className="text-[56px] leading-[52px] font-league-gothic mb-2">
            {title}
          </h1>
          <h3 className="tracking-tight text-lg font-medium leading-tight">
            {subtitle}
          </h3>
        </div>

        <p className="text-sm tracking-tight">
          <Trans>{description}</Trans>
        </p>
      </div>

      <div
        className="w-11 bg-black overflow-hidden relative"
        style={{ border: `${bgColor} 1.5px solid` }}
      >
        <div
          className={cn(
            "animate-scroll-up absolute",
            "whitespace-nowrap text-white font-league-gothic text-xl flex items-center justify-center w-full *:mb-3",
          )}
          style={{ writingMode: "vertical-lr" }}
        >
          <div>APPLY NOW</div>
          <div>APPLY NOW</div>
          <div>APPLY NOW</div>
          <div>APPLY NOW</div>
          <div>APPLY NOW</div>
          <div>APPLY NOW</div>
        </div>
      </div>

      <div className="h-full w-6" />
    </div>
  );

  // 외부 URL 은 일반 앵커로, 링크가 없으면 현재 페이지로 연결한다.
  return link ? (
    <a href={link}>{content}</a>
  ) : (
    <Link to="." viewTransition>
      {content}
    </Link>
  );
};

export default PositionCard;
