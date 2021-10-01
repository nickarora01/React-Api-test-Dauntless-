import React,{useContext} from "react";
import CoinsDetail from "./Components/CoinsDetail";
import CoinDetails from './Components/CoinDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function Album() {
  return (<>
          <Header/>
          <Router>
            <Switch>
          <Route exact path="/" component={CoinsDetail}/>
          <Route path={"/currency/:name"} component={CoinDetails}/>
        </Switch>
        </Router>
        <Footer/>
        </>
  );
}
export default Album;