import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import qnadetails from "./qna.ts";

const PreQna: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] =
    useState<string>("recruitment");

  const handleNavigate = (id: number) => {
    navigate(`/faq/${id}`);
  };

  // selectedCategory에 맞는 질문 필터링
  const questions = qnadetails.filter(
    (question) => question.category === selectedCategory,
  );

  return (
    <div className="flex">
      <div className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-4">카테고리</h2>
        <ul>
          <li
            className="cursor-pointer mb-2 hover:text-blue-600"
            onClick={() => setSelectedCategory("recruitment")}
          >
            리크루팅
          </li>
          <li
            className="cursor-pointer mb-2 hover:text-blue-600"
            onClick={() => setSelectedCategory("service")}
          >
            서비스
          </li>
        </ul>
      </div>

      <div className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-left text-gray-800 mb-8">
          자주 묻는 질문 (FAQ)
        </h1>

        <div>
          {/* 선택된 카테고리에 맞는 질문들만 표시 */}
          {questions.map((question) => (
            <div
              key={question.id}
              className="mb-4 cursor-pointer hover:bg-gray-100 p-2 transition-all"
              onClick={() => handleNavigate(question.id)} // 클릭 시 페이지 이동
            >
              <h2 className="text-xl font-semibold text-gray-800 text-left">
                {question.title.ko}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreQna;
