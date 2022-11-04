import React from "react";
import Repos from "./components/repos";
import { Route, Routes } from "react-router-dom";
import ContextProvider from "./components/context";
import MoreInfo from "./components/info";

const App = () => {
  return (

    <ContextProvider>
      {/* <MoreInfo /> */}
      <Routes>
        <Route path="/" element={< Repos />} >
          <Route path=":id" element={< MoreInfo />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
