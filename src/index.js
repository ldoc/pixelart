import React, {Suspense} from 'react';
import ReactDom from 'react-dom';
import Intro from './components/Intro';

const App = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 1)).then(
    () => import("./components/App")
  );
});

ReactDom.render(
  <Suspense fallback={<Intro/>}>
    <App/>
  </Suspense>
  ,document.getElementById('app'));