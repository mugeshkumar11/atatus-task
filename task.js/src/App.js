import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import { useReducer } from "react";
import { stateReducer } from "./pages/context/Reduce";
import { statecontext } from "./pages/context/Context";

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, {event:[]} )
  console.log("statereduce", state,dispatch);

  return (
    <statecontext.Provider value={{state, dispatch}}>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Add" element={<Add />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </statecontext.Provider>
  );
};

export default App;
