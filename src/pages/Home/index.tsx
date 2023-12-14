// import {Link} from "react-router-dom";
import MainHero from "../../components/pages/homepage/MainHero";
// import Canvas from "../../components/homepage/Canvas";
// import LazyShow from "../../components/homepage/LazyShow";
// import Product from "../../components/homepage/Product";
// import Features from "../../components/homepage/Features";
// import Pricing from "../../components/homepage/Pricing";
// import About from "../../components/homepage/About";

export default function Home() {
  return (
    <div>
      <section className="mt-10 md:mt-24">
        <MainHero />
      </section>
      {/* //
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
