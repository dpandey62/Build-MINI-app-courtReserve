

import FancyBanner from "../../Components/FancyBanner/FancyBanner";
import AboutClub from "../../Components/AboutClub/AboutClub";
import Facilities from "../../Components/Facilities/Facilities";
import Location from "../../Components/Location/Location";
import Newsletter from "../../Components/Newsletter/Newsletter";

const Home = () => {
  return (
     <main className="w-full overflow-x-hidden bg-black space-y-20">
      <section className="mb-20">
        <FancyBanner />
      </section>

         <section >
        <AboutClub />
      </section>

      <section >
        <Facilities />
      </section>

      <section >
        <Location />
      </section>

      <section >
        <Newsletter />
      </section>
      
    </main>
  );
};

export default Home;
