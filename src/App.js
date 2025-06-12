import { BrowserRouter, Route } from 'react-router';
import './App.css';
import { Suspense } from 'react';
import { Routes } from 'react-router';
import PrivateRoute from './components/private-route/private-route';
import createRoutes from './routing/routes';

const store = {} //will be created later
function App() {
  const allRoutes = createRoutes(store);

  return (
    <div className="App">
      <h2>This is a test</h2>
      <BrowserRouter>
        <Suspense fallback={<>Spinner....</>}>
          <Routes>
            {allRoutes.map((route, index) => (
              <Route
                path={route.path}
                element={
                  route.isPrivateRoute === true ? (
                    <PrivateRoute>
                      <route.element />
                    </PrivateRoute>
                  ) : (
                    <route.element />
                  )
                }
                key={index}
              />
            ))}
            <Route path="*" element={<>Error 404</>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
