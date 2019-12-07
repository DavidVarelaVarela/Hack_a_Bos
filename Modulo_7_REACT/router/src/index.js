import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useParams, useHistory } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product/:productDetailId">
          <ProductDetail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function Home() {
  return <h3>Home</h3>;
}

function Products() {
  return (
    <ul>
      <li>
        <Link to="/product/1">Product 1</Link>
      </li>
      <li>
        <Link to="/product/2">Product 2</Link>
      </li>
      <li>
        <Link to="/product/3">Product 3</Link>
      </li>
      <li>
        <Link to="/product/4">Product 4</Link>
      </li>
      <li>
        <Link to="/product/5">Product 5</Link>
      </li>
    </ul>
  );
}

function ProductDetail() {
  const params = useParams();
  const history = useHistory();

  return (
    <div>
      <a
        href=""
        onClick={e => {
          e.preventDefault();
          history.goBack();
        }}
      >
        Back
      </a>
      <h3>Product {params.productDetailId}</h3>
    </div>
  );
}

function About() {
  return <h3>About</h3>;
}

function NotFound() {
  return <h3>Not Found</h3>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
