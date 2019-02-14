import React, {useState, useLayoutEffect} from 'react';

function useView (dim,refParent){

  let currentAction = 'NONE';
  let touchesDiff = [];
  // touchesDiff[1] = {
  //   x:  0,
  //   y:  0,
  //   dx: 1,
  //   dy: 1
  // };
  let zoom = 0;
  let pos = [0,0];

  const [viewBox,setViewBox] = useState(getView);

  function getView(){
    const zx = zoom * dim.w;
    const zy = zoom * dim.h;
    return `${-dim.w/2 - zx + pos[0]} ${-dim.h/2 - zy + pos[1]} ${dim.w + (2 * zx)} ${dim.h + (2 * zy)}`;
  }

  function updateView(){
    setViewBox(getView());
  }

  function start(e){
    const t = e.changedTouches;
    Object.keys(t).forEach((k) => {
      touchesDiff[t[k].identifier] =  {
                                        x:  t[k].clientX,
                                        y:  t[k].clientY,
                                        dx: 0,
                                        dy: 0
                                      };
    })
  }

  function move(e){
    const t = e.changedTouches;
    Object.keys(t).forEach((k) => {
      touchesDiff[t[k].identifier] =  {
                                        x:  t[k].clientX,
                                        y:  t[k].clientY,
                                        dx: t[k].clientX - touchesDiff[k].x,
                                        dy: t[k].clientY - touchesDiff[k].y
                                      };
    })
    requestAnimationFrame(action);
  }

  function end(e){
    const t = e.changedTouches;
    currentAction = 'NONE';
  }

  function action(){
    const t = touchesDiff;
    if(t.length == 1) pos = [pos[0] + t[0].dx, pos[1] + t[0].dy];
    else if(t.length == 2) {
    }
    updateView();
  }

  useLayoutEffect(() => {
    refParent.current.ontouchstart = start;
    refParent.current.ontouchmove = move;
    refParent.current.ontouchend = end;
  }, []);

  return viewBox;
}

export default useView;