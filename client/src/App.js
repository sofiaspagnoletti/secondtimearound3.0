import React, { Component } from 'react';
import PostForm from './components/PostForm';
import ItemsDonated from "./components/ItemsDonated";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CardWrapper from "./components/CardWrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostCollectCard from './components/PostCollectCard';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Jumbotron />
        <CardWrapper>
          <ItemsDonated />
        </CardWrapper>
        <Wrapper>
          <PostForm />
        </Wrapper>
      </div>
    </Router>
  );
}






export default App;

