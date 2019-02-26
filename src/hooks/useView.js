import React, {useState, useLayoutEffect} from 'react';

function useView (dim,refParent){
  let touchesDiff = [];

  let angle = 0;
  let zoom = 0;
  let pos = [0,0];

  const [view,setView] = useState(getView);

  function getView(){
    const zx = zoom * dim.w;
    const zy = zoom * dim.h;
    return {viewBox:`${-dim.w/2 - zx + pos[0]} ${-dim.h/2 - zy + pos[1]} ${dim.w + (2 * zx)} ${dim.h + (2 * zy)}`, angle: angle};
  }

  function updateView(){
    setView(getView());
  }

  function start(e){
    e.target.addEventListener("touchmove", move);
    e.target.addEventListener("touchend", end);
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
    e.target.removeEventListener("touchmove", move);
    e.target.removeEventListener("touchend", end);
  }

  function action(){
    const t = touchesDiff;
    if(t.length == 1) pos = [pos[0] + t[0].dx, pos[1] + t[0].dy];
    else if(t.length == 2) {
    }
    updateView();
  }

  function doZoom(e){
    if(e.altKey) angle += e.wheelDelta > 0 ? 1 : -1;
    else zoom += e.wheelDelta > 0 ? 0.1 : -0.1;
    updateView();
  }

  useLayoutEffect(() => {
    refParent.current.ontouchstart = start;
    refParent.current.onmousewheel = doZoom;
  }, []);

  return view;//{viewBox: viewBox, angle: alpha};
}

export default useView;