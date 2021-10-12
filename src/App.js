import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Inventory from "./Components/Inventory/Inventory";
import NotFound from "./Components/NotFount/NotFound";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Review from "./Components/Review/Review";
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
             <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
          <ProductDetails></ProductDetails>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
