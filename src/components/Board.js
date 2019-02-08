import React, {useRef} from 'react';
import useSize from '../hooks/useSize';
import useView from '../hooks/useView';

function Board(props){

  function renderGrid() {
    const dims = view.split(' ');
    return ([
      <defs>
        <pattern id="grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" height="50" width="50" fill='lightgray'/>
          <rect x="50" y="50" height="50" width="50" fill='lightgray'/>
        </pattern>
      </defs>
      ,
      <rect x={-size.w/2} y={-size.h/2} width={size.w} height={size.h} fill="url(#grid)"></rect>
      ]
    )
  }
  const vv = props.view.split(' ')
  console.log(vv)
  return  <svg viewBox={props.view}>
            {/* <rect x={vv[0]} y={vv[1]}  width={vv[2]}  height={vv[3]} fill="yellow" ></rect> */}
            <rect x="-5" y="-5" width="10" height="10" onClick={()=> alert('')}></rect>
            <rect x="-5" y="-17" width="10" height="10"></rect>
            <rect x="-5" y="-34" width="10" height="10"></rect>
          </svg>;

};

const MyComponent = React.memo(function MyComponent(props) {
  return <circle cx="20" cy="30" r="5"/>
});

export default Board;