import logo from './logo.svg';
import './App.css';
import WebSite from "./WebSite";
import {
  HashRouter as Router
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="WholeWebsite">
        <WebSite />
      </div>
    </Router>
  );
}

export default App;
