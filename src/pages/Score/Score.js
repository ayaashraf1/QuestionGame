import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "../../components/PieComponent/PieComponent";
import { PieComponent } from "../../components/PieComponent/PieComponent";
import Title from "../../components/Title/Title";
import { calculateGameTime, resetState } from "../../state/action";
import { useGameDispatch, useGameState } from "../../state/context";
import './Score.css';

function Score() {
  const navigate = useNavigate();
  const dispatch = useGameDispatch();
  const {
    playerName,
    correctQuestionNo,
    wrongQuestionNo,
    skipQuestionNo,
  } = useGameState();
  const series = [correctQuestionNo, wrongQuestionNo, skipQuestionNo];
  const labels = ["correctQuestionNo", "wrongQuestionNo", "skipQuestionNo"];
  const startNewGame = () => {
    resetState(dispatch);
    navigate("/");
  };
  const gameTime = calculateGameTime();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Title text={"Congratulation " + playerName} />
      <br />
      <br />
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div className="time-score"><span className="time">{gameTime}</span> <span>Min</span></div>
        <PieComponent seriesData={series} labelsData={labels} />
      </div>
      <br />
      <br />
      <Button
        text="New Game"
        width="200px"
        height="65px"
        bgColor="#A8A8A8"
        clickMethod={startNewGame}
      />
    </div>
  );
}

export default Score;
