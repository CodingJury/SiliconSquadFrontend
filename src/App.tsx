import { Suspense, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomFullScreenLoader from './components/CustomLoader';
import { getRoutesBasedOnAuthentication } from './core/helper/route.helper';

function App() {
  const routeActive = useMemo(() => getRoutesBasedOnAuthentication(), []);
  console.log({ routeActive });
  return (
    <div>
      <Suspense fallback={<CustomFullScreenLoader open={true} />}>
        <BrowserRouter>
          <Routes>
            {routeActive?.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
