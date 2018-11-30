import React, {useRef} from 'react';
import useSize from '../hooks/useSize';
import useView from '../hooks/useView';

function Board(){
  const size = useSize();
  const ref = useRef();
  const view = useView(size,ref);

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

  return  <svg ref={ref} viewBox={view}>
            {renderGrid()}
            <text x="0" y="15" fill="red">{size.w}</text>
            <MyComponent/>
          </svg>;

};

const MyComponent = React.memo(function MyComponent(props) {
  return <circle cx="20" cy="30" r="5"/>
});

export default Board;