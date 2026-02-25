import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { getStringedDate } from "../util/getStringedDate";
import useDiary from "../hooks/useDiary";
import useTitle from "../hooks/useTitle";

const Diary = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const curDiaryItem = useDiary(id);

  useTitle(`${id}번의 일기 보기`);

  if (!curDiaryItem) {
    return <div>로딩 중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        leftChild={<Button text={"뒤로가기"} onClick={() => nav(-1)} />}
        title={`${title} 기록`}
        rightChild={
          <Button
            text={"수정하기"}
            type={"POSITIVE"}
            onClick={() => nav(`/edit/${id}`)}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
