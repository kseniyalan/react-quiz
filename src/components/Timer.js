import React, { useEffect } from 'react';

const Timer = ({dispatch, secondsRemaining}) => {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'TIMER_TICK' });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className='timer'>
      {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;