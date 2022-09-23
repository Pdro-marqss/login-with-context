import React from 'react';
import PrivateRoutes from './routes/private.routes';
import PublicRoutes from './routes/public.routes';

function App() {
  const user = false;

  return user ? <PrivateRoutes /> : <PublicRoutes />
};

export default App;
