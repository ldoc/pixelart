import React,{useState} from 'react';

function Button(props){
  const [touch, setTouch] = useState(false);

  const {name,px,py,icon,dispatch} = props;

  function start(e){
    console.log('boton')
    setTouch(true);
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    dispatch(
      {type: 'setAction', action: name}
    )
  }

  function end(e){
    setTouch(false);
    dispatch(
      {type: 'setAction', action: 'NONE'}
    )
  }

  const w=60;
  const h=60;

  return (
    <svg
      x={px}
      y={py}
      width={w}
      height={h}
      onTouchStart={start}
      onTouchEnd={end}>
      <g>
        <circle cx={w/2}
                cy={w/2}
                r={w/2 -2}
                stroke="black" opacity=".8" strokeWidth="3" fill={touch ? 'lightgreen' : 'gray'}/>
        <image  xlinkHref={icon}
                x={w/2}
                y={h/2}
                height={w}
                width={h}
                transform={'scale(0.5)'}/>
      </g>
    </svg>
  );

  //return <g key={name}><circle cx={px} cy={py} r="30" stroke="black" opacity=".8" strokeWidth="3" fill={touch ? 'green' : 'gray'} ></circle></g>
};

export default Button;