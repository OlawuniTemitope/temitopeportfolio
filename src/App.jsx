// import Hero from "./components/hero/Hero";
// import Services from "./components/services/Services";
// import Portfolio from "./components/portfolio/Portfolio";
// import Contact from "./components/contact/Contact";

import { lazy, Suspense } from "react";


const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={"loading..."}>
          <section id="#home">
            <Hero />
          </section>
      </Suspense>
      <Suspense >
          <section id="#services">
            <Services />
          </section>{" "}
      </Suspense>
      <Suspense >
          <Portfolio />
      </Suspense>
      <Suspense >
          <section id="#contact">
            <Contact />
          </section>{" "}
      </Suspense>
    </div>
  );
};

export default App;
