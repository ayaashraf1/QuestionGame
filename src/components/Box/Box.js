import React ,{useState}from "react";
import {useNavigate} from 'react-router-dom';
import { useGameDispatch} from "../../state/context";
// import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import LevelCard from "../LevelCard/LevelCard";
import {updateState} from '../../state/action';
import "./Box.css";
import { globalConfig } from "../../shared/globalConfig";

function Box() {
  const navigate = useNavigate();
  const dispatch= useGameDispatch();
  const [playerName,setplayerName] = useState('');
  const [level,setLevel] = useState('');
  const [errorMsg,setErrorMsg] = useState(false);
  const levels = [
    { text: "Easy", id: "0" },
    { text: "Meduim", id: "1" },
    { text: "Hard", id: "2" },
  ];
  const goToCategoryPage = () => {
    const timer = getTimerOfLevel(level);
    updateState(playerName,level,timer,dispatch);
    globalConfig.gameStartIn = Date.now();
    navigate('/category');
  };
  const getTimerOfLevel = (level)=>{
    let timer = 0;
    if(level==='easy') timer=90000;
    else if(level==='meduim') timer=60000;
    else timer=30000;
    return timer;
  }
  const setStateOfLevel=(e)=>{
    const level = e.target.textContent.toLowerCase();
    setLevel(level);
    if(playerName.trim('') === ''){
       setErrorMsg(true);
    }else {
      goToCategoryPage();
    }
  }
  return (
    <div className="box-container">
      <InputText placeholder="Player Name" value={playerName} changeMethod={(e)=>{setplayerName(e.target.value)}}/>
      {errorMsg && <div style={{color:"red"}}>Please enter Name</div>}
      <br />
      <div className="levels-container">
        {levels.map((level) => {
          return <LevelCard text={level.text} key={level.id} clickMethod={setStateOfLevel} />;
        })}
      </div>
      <br />
      {/* <Button
        text="Play"
        width="200px"
        height="50px"
        bgColor="#72A0C1"
        clickMethod={goToCategoryPage}
      /> */}
    </div>
  ) 
}

export default Box;
