import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";

import faqDetails from "./faq.ts";

const Faq: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("type") as
    | "recruitment"
    | "service";

  const handleNavigate = (id: number) => {
    navigate(`/faq/${id}?type=${selectedCategory}`);
  };

  const questions = faqDetails.filter(
    (question) => question.category === selectedCategory,
  );

  const { i18n } = useTranslation();

  return (
    <div className="flex-1 flex flex-col gap-4">
      {questions.map((question) => (
        <div
          key={question.id}
          className="cursor-pointer hover:bg-primary-light px-4 py-3 transition-all hover:text-primary text-dark rounded-lg"
          onClick={() => handleNavigate(question.id)}
        >
          <div className="flex items-center gap-[30px] text-xl text-left">
            <h2 className="font-semibold">Q</h2>
            <h2>
              {i18n.language === "ko-KR"
                ? question.title.ko
                : question.title.en}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
