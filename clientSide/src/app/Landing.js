import HeroSection from "./Components/Hero";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import destinations from "./Data";
import Head from "next/head";
import Rated from "./Components/Rated";
// import ComingSoon from "./Components/CommingSoon";
const Landing = () => {
  return (
    // <ComingSoon />
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "antiquewhite",
      }}
    >
      <Head>
        <title>PathFinder</title>
      </Head>
      <HeroSection />
      <Cards Data={destinations} />
      <main className="py-16 container mx-auto px-6 md:px-0">
        <Rated />
      </main>
      <Footer />
    </div>
  );
};
export default Landing;
// return(val=36
//  <h1>val<h1/>
//val=val+1
//      <h1>val<h1/>)
