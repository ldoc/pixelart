import React from 'react';

const Rect = React.memo((props) => {
  const {x,y,active,bSize} = props;
  return <rect x={x} y={y} width={bSize} height={bSize} fill={active?'red':'black'}/>;
});

export default Rect;