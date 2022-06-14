import React from 'react';
import Countdown from 'react-countdown';

export const Timer =({currentTimer})=>{
  // Random component
  const Completionist = () => <span></span>;
  
  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };
  
  return (
    <Countdown
      date={Date.now() + currentTimer}
      renderer={renderer}
    />);
}