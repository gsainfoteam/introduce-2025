import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import inferenceExamples from "./qna.ts";

const PreQna: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] =
    useState<string>("recruitment");

  const handleNavigate = (id: number) => {
    navigate(`/faq/${id}`);
  };

  const filteredExamples = inferenceExamples.filter(
    (example) => example.category === selectedCategory,
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
          {filteredExamples.map((example) => (
            <div
              key={example.id}
              className="mb-4 cursor-pointer hover:bg-gray-100 p-2 transition-all"
              onClick={() => handleNavigate(example.id)}
            >
              <h2 className="text-xl font-semibold text-gray-800 text-left">
                {example.title.ko}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreQna;
