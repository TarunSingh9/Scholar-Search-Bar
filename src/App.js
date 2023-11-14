import React from "react";
import Header from './Header';
import CardComponent from './CardComponent';
import ResponsiveCard from './ResponsiveCard';
import LandingPage from './LandingPage';
import LinkPage from "./LinkPage";


export function App() {
  return (
    <>
    <div className="App">
       <Header />
        <LandingPage />
        <CardComponent />
        <ResponsiveCard />
       <LinkPage/>

  </div>
</>
   )
  };
export default App;
