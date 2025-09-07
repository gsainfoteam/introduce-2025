import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import faqDetails from "./faq.ts";

const FaqDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const faq = faqDetails.find((ex) => ex.id.toString() === id);
  const { i18n } = useTranslation();

  if (!faq) {
    return <div>해당 질문을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex-1 flex flex-col gap-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-[#7A7A7A] cursor-pointer"
      >
        <span className="text-2xl mr-2">←</span>{" "}
        {i18n.language === "ko-KR" ? "질문 목록" : "Question List"}
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

export default FaqDetail;
