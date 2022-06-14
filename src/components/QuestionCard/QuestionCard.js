import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import { getRandomNumbers } from '../../shared/utils';
import { useGameDispatch, useGameState } from '../../state/context';
import { incrementCorrectQuestionNo,incrementSkipQuestionNo,setQuestionNo,incrementWrongQuestionNo } from '../../state/setter';
import "./QuestionCard.css";

function QuestionCard({questionData}) {
    console.log(questionData)
    const navigate = useNavigate();
    const {questionNo} = useGameState();
    const dispatch = useGameDispatch();
    const [currentAnswer,setCurrentAnswer] = useState('');
    const [randomIndex,setRandomIndex] = useState([]);
    const handleNext = ()=>{
      if(currentAnswer==='') {
          alert('plz choose answer');
          return;
        }
        if(currentAnswer){
            dispatch(incrementCorrectQuestionNo());
        }else{
            dispatch(incrementWrongQuestionNo());
        }
        moveToNextQuestionOrCategory();
    }
    const handleSkip = ()=>{
        moveToNextQuestionOrCategory();
        dispatch(incrementSkipQuestionNo());
    }
    const moveToNextQuestionOrCategory = () =>{
        if(questionNo<2){
            dispatch(setQuestionNo(questionNo+1));
        }else{
            dispatch(setQuestionNo(0));
            navigate('/category');
        }
    }
    const setAnswer=(e)=>{
      const answer = e.target.getAttribute('answer');
      if(answer === "true"){
          setCurrentAnswer(true);
      }else{
        setCurrentAnswer(false);
      }
    }
    useEffect(() => {
        if(questionData && questionData.type==='multiple'){
            setRandomIndex(getRandomNumbers([0,1,2,3],4));
        }
        setCurrentAnswer('');
    }, [questionData]);
    return (
        questionData&&
        <div style={{display:"flex",flexDirection:"column",alignItems: "center",justifyContent: "center"}}>
            <div className="question">{questionData.question}</div>
            <div className="answers-container">
                {
                    questionData.type==='multiple' ?
                    randomIndex.map((randInd)=>{
                        return <div className="answer" key={randInd} answer={questionData.allAnswers[randInd].isTrue}  onClick={setAnswer}>{questionData.allAnswers[randInd].answer}</div>
                    })
                    :
                    <div style={{display:"flex",alignItems: "center",justifyContent:"space-between",width:"100%"}}>
                    <div className="answer" key={0} answer={questionData.correct_answer==='True'?'true':'false'} onClick={setAnswer}>True</div>
                    <div className="answer" key={1} answer={questionData.correct_answer==='True'?'false':'true'} onClick={setAnswer}>False</div>
                    </div>
                }

            </div>
            <div style={{display:"flex",alignItems: "center",justifyContent: "center"}}>
            <Button text="Skip" width="100px" height="50px" clickMethod={handleSkip} bgColor="#A8A8A8" />
            <Button text="Next" width="100px" height="50px" clickMethod={handleNext} bgColor="#A8A8A8" /> 
            </div>
        </div>
    )
}

export default QuestionCard
