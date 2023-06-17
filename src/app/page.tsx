import CTA from "@/components/CTA";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Incorpd from "@/components/Incorpd";
import IncorpdCTA from "@/components/IncorpdCTA";
import Infin from "@/components/Infin";
import InfinCTA from "@/components/InfinCTA";
import Mavenstry from "@/components/Mavenstry";

export default function Home() {
  return (
    <main>
      <Hero />
      <Incorpd />
      <IncorpdCTA />
      <Infin />
      <InfinCTA />
      <Community />
      {/* <CTA /> */}
      {/* <Mavenstry /> */}
      <Footer />
    </main>
  );
}
