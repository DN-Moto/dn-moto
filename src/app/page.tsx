import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FadeIn from "../components/FadeIn";
import WhyDNMoto from "../components/WhyDNMoto";
import FeaturedProject from "../components/FeaturedProject";
import Contact from "../components/Contact";
import Gallery from "../components/gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

<FadeIn>
  <WhyDNMoto />
</FadeIn>

<FadeIn>
  <Services />
</FadeIn>

<FadeIn>
  <section id="projects">
  <FeaturedProject />
  <Gallery />
</section>
</FadeIn>

<FadeIn>
  <Contact />
</FadeIn>

<Footer />

    </main>
  );
}