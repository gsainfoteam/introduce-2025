import React from "react";
import { useParams } from "react-router-dom";
import qnadetails from "./qna.ts";

const FaqDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const qna = qnadetails.find((ex) => ex.id.toString() === id);

  if (!qna) {
    return <div>해당 질문을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{qna.title.ko}</h1>
      <p className="mt-4">{qna.description.ko}</p>
    </div>
  );
};

export default FaqDetail;
