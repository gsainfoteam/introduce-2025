import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import faqdetails from "./faq.ts";
import Navbar from "src/components/common/navbar/index.tsx";
import { useTranslation } from "react-i18next";

const Faq: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] =
    useState<string>("recruitment");
  const { i18n } = useTranslation();

  const handleNavigate = (id: number) => {
    navigate(`/faq/${id}`);
  };

  const questions = faqdetails.filter(
    (question) => question.category === selectedCategory,
  );

  return (
    <div className="flex-grow context mt-20">
      <div className="fixed top-0 left-0 w-full z-10 content-wrapper">
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
              onClick={() => setSelectedCategory("recruitment")}
            >
              {i18n.language === "ko-KR" ? "리크루팅" : "Recruitment"}
            </li>
            <li
              className={`cursor-pointer mb-10 text-xl ${selectedCategory === "service" ? "text-[#FF4500]" : ""}`}
              onClick={() => setSelectedCategory("service")}
            >
              {i18n.language === "ko-KR" ? "서비스" : "Service"}
            </li>
          </ul>
        </div>

        <div className="flex-grow p-6">
          <div>
            {questions.map((question) => (
              <div
                key={question.id}
                className="mb-4 cursor-pointer hover:bg-gray-100 p-2 transition-all"
                onClick={() => handleNavigate(question.id)}
              >
                <div className="flex items-center gap-[50px]">
                  <h2 className="text-xl text-gray-800 text-left font-semibold">
                    Q
                  </h2>
                  <h2 className="text-xl text-gray-800 text-left">
                    {i18n.language === "ko-KR"
                      ? question.title.ko
                      : question.title.en}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
