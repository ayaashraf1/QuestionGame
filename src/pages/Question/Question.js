import React from 'react';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import { Timer } from '../../components/Timer/Timer';
import { useGameState } from '../../state/context';

function Question() {
    const {timer,questionNo,currentCategoryQuestions} = useGameState();
    return (
        currentCategoryQuestions&&
        <div style={{display:"flex",flexDirection:"column",alignItems: "center",justifyContent: "center"}}>
            <div style={{ width: "80%"}}> <Timer currentTimer={timer} /></div>
           <QuestionCard questionData={currentCategoryQuestions[questionNo]} />
        </div>
    )
}

export default Question
