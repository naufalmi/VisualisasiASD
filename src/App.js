import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Component/Home/Home";
import Stack from "./Component/StrukturData/Stack";
import Queue from "./Component/StrukturData/Queue";
import PriorityQueue from "./Component/StrukturData/PriorityQueue";
import DoublyLinkedList from "./Component/StrukturData/DoublyLinkedList";
import BinarySearch from "./Component/Searching/BinarySearch";
import SequentialSearch from "./Component/Searching/SequentialSearch";
import InsertionSort from "./Component/Sort/InsertionSort";
import QuickSort from "./Component/Sort/QuickSort";
import MergeSort from "./Component/Sort/MergeSort";
import { NoMatch } from "./NoMatch";
import { NavigationBar } from "./Component/Reuseable/NavigationBar";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Stack">
            <Stack />
          </Route>
          <Route path="/BinarySearch" component={BinarySearch} />
          <Route path="/Queue" component={Queue} />
          <Route path="/PriorityQueue" component={PriorityQueue} />
          <Route path="/DoublyLinkedList" component={DoublyLinkedList} />
          <Route path="/InsertionSort" component={InsertionSort} />
          <Route path="/QuickSort" component={QuickSort} />
          <Route path="/MergeSort" component={MergeSort} />
          <Route path="/SequentialSearch" component={SequentialSearch} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
