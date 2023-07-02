import React from "react";
import "./styled.scss";
import { Route, RouteProps, Routes } from "react-router-dom";
import routesData from "utils/routesData";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        {routesData.map((element: RouteProps) => {
          return <Route {...element}></Route>;
        })}
      </Routes>
    </div>
  );
};

export default App;
