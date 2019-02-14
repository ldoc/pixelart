import React,{useState} from 'react';

function Button(props){
  const [touch, setTouch] = useState(false);

  function start(){
    setTouch(true);
  }

  function end(){
    setTouch(false);
  }

  return <circle cx="35" cy="35" r="30" fill="none" stroke="black" strokeWidth="2" fill={touch ? 'gray' : 'green'} onTouchStart={start} onTouchEnd={end}></circle>
};

export default Button;