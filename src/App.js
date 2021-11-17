import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from "react-router-dom";

import History from "./components/history.js";

import HelloWorld from "./components/a6/HelloWorld";
import A6Practice from "./components/a6/Practice";
import A6HomeScreen from "./components/a6/Build/HomeScreen";
import A6 from "./components/a6";
import A6Build from "./components/a6/Build";

import A7Practice from "./components/a7/Practice";
import A7 from "./components/a7";
import A7Build from "./components/a7/Build";

import A8Practice from "./components/a8/Practice";
import A8 from "./components/a8";
import A8Build from "./components/a8/Build";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path={["/a6", "/a6/hello"]} exact={true}>
                  <HelloWorld/>
              </Route>
              <Route path="/a6/practice" exact={true}>
                  <A6/>
                  <A6Practice/>
              </Route>
              <Route path="/a6/twitter/explore" exact={true}>
                  <A6Build/>
              </Route>
              <Route path="/a6/twitter/home" exact={true}>
                  <A6HomeScreen/>
              </Route>

              <Route path="/a7/practice" exact={true}>
                  <A7Practice/>
              </Route>
              <Route path="/a7/twitter">
                  <A7Build/>
              </Route>

              <Route path="/a8/practice" exact={true}>
                 <A8Practice/>
              </Route>
              <Route path="/a8/twitter">
                  <A8Build/>
              </Route>

              <Route path="/" exact={true}>
                  <A8/>
                  <A7/>
                  <hr/>
                  <A6/>
                  <hr/>
                  <History/>
              </Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
