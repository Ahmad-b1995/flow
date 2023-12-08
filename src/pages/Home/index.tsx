// import {Link} from "react-router-dom";
import MainHero from "../../components/pages/homepage/MainHero";
import Header from "../../components/pages/homepage/Header";
// import Canvas from "../../components/homepage/Canvas";
// import LazyShow from "../../components/homepage/LazyShow";
// import Product from "../../components/homepage/Product";
// import Features from "../../components/homepage/Features";
// import Pricing from "../../components/homepage/Pricing";
// import About from "../../components/homepage/About";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full h-[calc(100vh-5rem)] overflow-hidden flex flex-col items-center justify-center">
        <section className="max-w-7xl w-[80rem]">
          <MainHero />
        </section>
      </div>
      {/* //  <Canvas /> 
//  <LazyShow>
//           <>
//           <Product />
//           <Canvas />
//           </>
//           </LazyShow>
//           <LazyShow>
//           <>
//           <Features />
//           <Canvas />
//           </>
//           </LazyShow>
//           <LazyShow>
//           <Pricing />
//           </LazyShow>
//           <LazyShow>
//           <>
//           <Canvas />
//           <About />
//           </>
//         </LazyShow>  */}
    </div>
  );
}
