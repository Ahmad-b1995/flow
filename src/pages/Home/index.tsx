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
      <div className={`bg-background grid gap-y-16 overflow-hidden`}>
        <section className="max-w-7xl mx-auto">
          <Header />
          <MainHero />
        </section>
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
