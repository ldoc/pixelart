import React from 'react';

const Cell = React.memo((props) => {
  const {x,y,size,color,offsetCenter,dispatch} = props;

  function click(){
    console.log(`${x} - ${y}`)
    dispatch(
      {type: 'setCell', x: x, y: y}
    )
  }
  return <rect  x={x * size - offsetCenter[0]}
                y={y * size - offsetCenter[1]}
                width={size}
                height={size}
                fill={color ? color : 'white'}
                stroke="black"
                onClick = {click}/>;
},
(prev, next) => {
 return prev.x == next.x && prev.y == next.y && prev.color == next.color
});

// function Cell(props){
//   const {x,y,size,color,offsetCenter,dispatch} = props;

//   function click(){
//     console.log(`${x} - ${y}`)
//     dispatch(
//       {type: 'setCell', x: x, y: y}
//     )
//   }
//   console.log('ww')
//   return <rect  x={x * size - offsetCenter[0]}
//                 y={y * size - offsetCenter[1]}
//                 width={size}
//                 height={size}
//                 fill={color ? color : 'white'}
//                 stroke="black"
//                 onClick = {click}/>;
// };

export default Cell;