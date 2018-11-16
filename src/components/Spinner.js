import React, {useState, useEffect, useRef} from 'react';
import Rect from './Rect';

function Spinner(props){
  const [step, setStep] = useState(0);
  const countStep = useRef(step);

  countStep.current = step;

  let timer = null;

  useEffect(() => {
    timer = setInterval(() => setStep(countStep.current == 3 ? 0 : countStep.current + 1),250);
    return () => clearInterval(timer)
  },[]);

  const {bSize} = props;
  const pos = bSize + bSize/10;
  const rects = [[0,0],[pos,0],[pos,pos],[0,pos]]

  return (
    <g>
      {rects.map((b,i) => <Rect key={i} x={b[0]} y={b[1]} active={step == i} bSize={bSize}/>)}
    </g>);
}

export default Spinner;