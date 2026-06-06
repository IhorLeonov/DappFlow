import { Footer } from "@/src/components/organisms/Footer";
import { Header } from "@/src/components/organisms/Header";
import { HomeHero } from "@/src/components/organisms/HomeHero";

export function HomePage() {
  return (
    <main>
      <Header />
      <HomeHero />
      <Footer />
    </main>
  );
}
