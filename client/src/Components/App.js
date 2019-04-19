import React from "react";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return <div>Page 1</div>;
};

const PageTwo = () => {
  return <div>Page 2</div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageTwo} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
