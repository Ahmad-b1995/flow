import React from "react";
import {Link} from "react-router-dom";
import MainHero from "../../components/homepage/MainHero";
import Header from "../../components/homepage/Header";
import MainHeroImage from "../../components/homepage/MainHeroImage";
import Canvas from "../../components/homepage/Canvas";
import LazyShow from "../../components/homepage/LazyShow";
import Product from "../../components/homepage/Product";
import Features from "../../components/homepage/Features";
import Pricing from "../../components/homepage/Pricing";
import About from "../../components/homepage/About";

export default function Home() {
  return (
    <>
      <Link to="/board">Board</Link>
      <div className={`bg-background grid gap-y-16 overflow-hidden`}>
        <div className={`relative bg-background`}>
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
            >
              <Header />
              <MainHero />
            </div>
          </div>
          <MainHeroImage />
        </div>
        <Canvas />
        <LazyShow>
          <>
            <Product />
            <Canvas />
          </>
        </LazyShow>
        <LazyShow>
          <>
            <Features />
            <Canvas />
          </>
        </LazyShow>
        <LazyShow>
          <Pricing />
        </LazyShow>
        <LazyShow>
          <>
            <Canvas />
            <About />
          </>
        </LazyShow>
      </div>
    </>
  );
}
