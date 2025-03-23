import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

// import layouts
import AuthLayout from './layouts/AuthLayout';

// import pages
const signup = lazy(() => import("./pages/Signup"))

// import loading screen
import Loading from './Loading';
import Signup from './pages/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth routes */}
        <Route path='/' element={<AuthLayout />}>
          <Route path='/signup' element={<Suspense fallback={<Loading />}> <Signup /> </Suspense>} />
          <Route path='/login' />
        </Route>

        {/* user routes */}
        <Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
