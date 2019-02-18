import React, {useRef} from 'react';
import useView from '../hooks/useView';
import useSize from '../hooks/useSize';
import Board from './Board';
import Menu from './Menu';

function Container(props){
  const size = useSize();
  const ref = useRef();
  const view = useView(size,ref);

  const {grid,dispatch} = props;

  const stl = {
    width: '100%',
    height: '100%'
  }

  return  <svg ref={ref} style={stl}>
            <Board view={view} grid={grid} dispatch={dispatch}/>
            <Menu view={view}/>
            {/* <rect x="0" y="0" width="100%" height="100%" fill="gray"></rect> */}

          </svg>;

}

export default Container;