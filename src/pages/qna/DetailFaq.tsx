import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import faqdetails from "./faq.ts";

const FaqDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const faq = faqdetails.find((ex) => ex.id.toString() === id);

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
    <div className="flex-grow p-6 context">
      <h1 className="text-4xl font-bold text-left text-gray-800 mb-8">
        자주 묻는 질문 (FAQ)
      </h1>
      <div className="flex">
        <div className="w-64 p-4 flex-shrink-0">
          <ul>
            <li
              className={`cursor-pointer mb-2 ${selectedCategory === "recruitment" ? "text-[#FF4500]" : ""}`}
            >
              리크루팅
            </li>
            <li
              className={`cursor-pointer mb-2 ${selectedCategory === "service" ? "text-[#FF4500]" : ""}`}
            >
              서비스
            </li>
          </ul>
        </div>

        <div className="flex-grow p-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-[#7A7A7A] mb-4"
          >
            <span className="text-2xl mr-2">←</span> 질문 목록
          </button>

          <h1 className="text-3xl font-bold">{faq.title.ko}</h1>
          <div className="mt-4" />
          <div style={{ whiteSpace: "pre-line" }}>{faq.description.ko}</div>
        </div>
      </div>
    </div>
  );
};

export default FaqDetail;
