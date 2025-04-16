import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import faqdetails from "./faq.ts";
import Navbar from "src/components/common/navbar/index.tsx";
import { useTranslation } from "react-i18next";

const FaqDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const faq = faqdetails.find((ex) => ex.id.toString() === id);
  const { i18n } = useTranslation();

  const [selectedCategory, setSelectedCategory] =
    useState<string>("recruitment");

  useEffect(() => {
    if (faq) {
      setSelectedCategory(faq.category);
    }
  }, [faq]);

  if (!faq) {
    return <div>해당 질문을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex-grow context mt-20">
      <div className="fixed top-0 left-O w-full z-10 content-wrapper">
        <Navbar mode="light" hasBackground={true} />
      </div>
      <h1 className="text-4xl p-12 font-bold text-left text-gray-800">
        {i18n.language === "ko-KR" ? "자주 묻는 질문" : "FAQ"}
      </h1>
      <div className="flex">
        <div className="w-64 p-12 flex-shrink-0">
          <ul>
            <li
              className={`cursor-pointer mb-10 text-xl ${selectedCategory === "recruitment" ? "text-[#FF4500]" : ""}`}
            >
              {i18n.language === "ko-KR" ? "리크루팅" : "Recruitment"}
            </li>
            <li
              className={`cursor-pointer mb-10 text-xl ${selectedCategory === "service" ? "text-[#FF4500]" : ""}`}
            >
              {i18n.language === "ko-KR" ? "서비스" : "Service"}
            </li>
          </ul>
        </div>

        <div className="flex-grow p-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-[#7A7A7A] mb-10"
          >
            <span className="text-2xl mr-2">←</span>{" "}
            {i18n.language === "ko-KR" ? "질문 목록" : "Question List"}
          </button>

          <h1 className="text-3xl font-bold">
            {i18n.language === "ko-KR" ? faq.title.ko : faq.title.en}
          </h1>
          <div className="mt-10" />
          <div style={{ whiteSpace: "pre-line", lineHeight: "40px" }}>
            {i18n.language === "ko-KR"
              ? faq.description.ko
              : faq.description.en}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqDetail;
