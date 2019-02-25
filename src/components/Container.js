import React, {useRef,Suspense} from 'react';
import useView from '../hooks/useView';
import useSize from '../hooks/useSize';
import Board from './Board';
import Menu from './Menu';
// import ColorPicker from './ColorPicker'

function Container(props){
  const size = useSize();
  const ref = useRef();
  const view = useView(size,ref);

  const {grid,dispatch,action} = props;

  const stl = {
    width: '100%',
    height: '100%'
  }

  const ColorPicker = React.lazy(() => import("./ColorPicker"));

  return  <svg ref={ref} style={stl}>
            <Board view={view.viewBox} angle={view.angle} grid={grid} dispatch={dispatch}/>
            <Menu view={view.viewBox} dispatch={dispatch}/>
            <Suspense>
              {action == 'color' ? <ColorPicker/> : null}
            </Suspense>
          </svg>;

}

export default Container;