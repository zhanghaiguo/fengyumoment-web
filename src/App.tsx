import React from 'react';
import { useLocation, Outlet } from "react-router-dom";

const App: React.FC = () => {

  const location = useLocation();



    return <Outlet />;
  

  
};

export default App;