import React from "react";
// components
import { Header, Nav, About, Services, Work, Contact, Banner } from "./components";

export default function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className="h-[4000px]" /> */}
    </div>
  );
}
