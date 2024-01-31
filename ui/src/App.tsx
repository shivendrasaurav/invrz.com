import React, {Fragment} from "react"; // eslint-disable-line no-unused-vars
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'fdweb/fluent-core.css';
import 'fdweb/fluent-icons.css';
import './App.css';

import Home from "./routes/home/index.tsx";
import PrivacyPolicy from "./routes/privacy-policy/index.tsx";
import DataPolicy from "./routes/data-policy/index.tsx";

const App = () => {
  return(
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/privacy-policy/:appname" element={<PrivacyPolicy/>} />
          <Route path="/data-policy/:appname" element={<DataPolicy/>} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App;