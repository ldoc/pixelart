import React, {useRef} from 'react';
import useView from '../hooks/useView';
import useSize from '../hooks/useSize';
import Board from './Board';

function Container(props){
  const size = useSize();
  const ref = useRef();
  const view = useView(size,ref);

  const stl = {
    width: '100%',
    height: '100%'
  }

  return  <svg ref={ref} style={stl}>
            <Board view={view}/>
            <circle cx="20" cy="20" r="40" fill="none" stroke="red"></circle>
            {/* <rect x="0" y="0" width="100%" height="100%" fill="gray"></rect> */}

          </svg>;

}

export default Container;