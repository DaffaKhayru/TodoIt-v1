import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

// import layouts
import AuthLayout from './layouts/AuthLayout';
import UserLayout from './layouts/UserLayout';

// import pages
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Inbox = lazy(() => import("./pages/Inbox"));

// import loading screen
import Loading from './Loading';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth routes */}
        <Route path='/' element={<AuthLayout />}>
          <Route path='/signup' element={<Suspense fallback={<Loading />}> <Signup /> </Suspense>} />
          <Route path='/login' element={<Suspense fallback={<Loading />}> <Login /> </Suspense>} />
        </Route>

        {/* user routes */}
        <Route path='/' element={<UserLayout />}>
          <Route path='/inbox' element={<Suspense fallback={<Loading />}> <Inbox /> </Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
