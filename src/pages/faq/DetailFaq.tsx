import { useNavigate, useParams, useSearch } from "@tanstack/react-router";
import React from "react";
import { useTranslation } from "react-i18next";

import faqDetails from "./faq.ts";

export const FaqDetail: React.FC = () => {
  const { id } = useParams({ strict: false });
  const search = useSearch({ strict: false });
  const navigate = useNavigate();
  const faq = faqDetails.find((ex) => ex.id.toString() === id);
  const { t, i18n } = useTranslation();
  const type = search.type || "recruitment";

  if (!faq) {
    return <div>{t("faq.detail.notFound")}</div>;
  }

  return (
    <div className="flex-1 flex flex-col gap-6">
      <button
        onClick={() =>
          navigate({
            to: "/faq",
            search: { type },
            viewTransition: true,
            resetScroll: false,
          })
        }
        className="flex items-center text-[#7A7A7A] cursor-pointer"
      >
        <span className="text-2xl mr-2">←</span> {t("faq.detail.backToList")}
      </button>

      <h1 className="text-3xl font-bold">
        {i18n.language === "ko-KR" ? faq.title.ko : faq.title.en}
      </h1>
      <div style={{ whiteSpace: "pre-line", lineHeight: "40px" }}>
        {i18n.language === "ko-KR" ? faq.description.ko : faq.description.en}
      </div>
    </div>
  );
};
