import React from 'react';
import Terminal from './Terminal';

const Home = () => {
  return (
    <>
      <h1>Terminal Component will go here</h1>
      <h3>introduction...</h3>
      <Terminal input={"cat about.me"} output={"this!"} />
    </>
  )
}

export default Home;