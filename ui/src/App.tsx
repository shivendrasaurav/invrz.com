import {Fragment} from "react";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import 'patterns-ui/styles/main.css'
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