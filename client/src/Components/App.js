import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

//link is for anchor tag

// 3 routers
// browser routers = localhost:3000/pagetwo, hash router uses everython after a # as the path, memory router

// Doing deployment with browser routers is easy

// why we use different routers, useful for production?

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header value="Header" />

        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" exact component={StreamCreate} />
          <Route path="/stream/delete" exact component={StreamDelete} />
          <Route path="/stream/edit" exact component={StreamEdit} />
          <Route path="/stream/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
