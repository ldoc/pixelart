import React, {useState, useLayoutEffect} from 'react';

function useView (dim,refParent){

  let timer = null;
  let currentAction = 'NONE';
  let touches = null;
  let zoom = 0;

  const [viewBox,setViewBox] = useState(getView);

  function getView(){
    const zx = zoom * dim.w;
    const zy = zoom * dim.h;
    return `${-dim.w/2 - zx} ${-dim.h/2 - zy} ${dim.w + (2 * zx)} ${dim.h + (2 * zy)}`;
  }

  function updateView(){
    setViewBox(getView());
  }

  function start(e){
    currentAction = 'ZOOM';
    animate();
  }

  function move(e){
    const t = e.touches;
    if(t && t.length) touches = t
    else touches = {};
  }

  function end(){
    currentAction = 'NONE';
    clearTimeout(timer);
  }

  function animate(){
    if(currentAction != 'NONE'){
      timer = setTimeout(() => {
        requestAnimationFrame(animate);
        action();
      }, 1000 / 30);
    }
  }

  function action(){
    console.log('pasa')
    if(currentAction == 'ZOOM'){
      zoom = zoom - 0.01;
      updateView();
    }
  }

  useLayoutEffect(() => {
    refParent.current.ontouchstart = start;
    refParent.current.ontouchmove = move;
    refParent.current.ontouchend = end;
  }, []);

  console.log(currentAction);

  return viewBox;
}

export default useView;