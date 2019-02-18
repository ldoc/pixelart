import React from 'react';

const Cell = React.memo((props) => {
  const {x,y, px,py,size,color,offsetCenter,dispatch} = props;

  function click(){
    console.log(`${px} - ${py}`)
    dispatch(
      {type: 'setCell', x: x, y: y}
    )
  }

  console.log('cell')

  return <g>
            <rect x={px}
                  y={py}
                  width={size}
                  height={size}
                  fill={color ? color : 'white'}
                  stroke="black"
                  onClick = {click}/>
            {/* <text x={px + 5} y={py+25}>{`(${px},${py})`}</text> */}
         </g>;
},
(prev, next) => {
 return prev.px == next.px && prev.py == next.py && prev.color == next.color
});


export default Cell;