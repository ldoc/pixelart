import React, {useState, useLayoutEffect} from 'react';

function useView (dim,refParent){
  let zoom = 0;
  const [viewBox,setViewBox] = useState(getView);

  function getView(){
    return `${-dim.w/2 - zoom} ${-dim.h/2 - zoom} ${dim.w + (2 * zoom)} ${dim.h + (2 * zoom)}`;
  }

  function updateView(){
    setViewBox( `${-dim.w/2 - zoom} ${-dim.h/2 - zoom} ${dim.w + (2 * zoom)} ${dim.h + (2 * zoom)}`);
  }

  function changeZoom(e){
    zoom += e.wheelDelta > 0 ? 20 : -20;
    updateView();
  }

  useLayoutEffect(() => {
    refParent.current.onmousewheel = changeZoom;
  }, []);

  return viewBox;
}

export default useView;