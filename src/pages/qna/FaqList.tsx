import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import faqdetails from "./faq.ts";

const Faq: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] =
    useState<string>("recruitment");

  const handleNavigate = (id: number) => {
    navigate(`/faq/${id}`);
  };

  const questions = faqdetails.filter(
    (question) => question.category === selectedCategory,
  );

  return (
    <div className="flex-grow p-6 context">
      <h1 className="text-4xl font-bold text-left text-gray-800 mb-8">
        자주 묻는 질문 (FAQ)
      </h1>
      <div className="flex">
        <div className="w-64 p-4 flex-shrink-0">
          <ul>
            <li
              className={`cursor-pointer mb-2 ${selectedCategory === "recruitment" ? "text-[#FF4500]" : ""}`}
              onClick={() => setSelectedCategory("recruitment")}
            >
              리크루팅
            </li>
            <li
              className={`cursor-pointer mb-2 ${selectedCategory === "service" ? "text-[#FF4500]" : ""}`}
              onClick={() => setSelectedCategory("service")}
            >
              서비스
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
                <h2 className="text-xl font-semibold text-gray-800 text-left">
                  {question.title.ko}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
