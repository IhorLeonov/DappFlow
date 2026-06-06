import { Footer } from "@/src/components/organisms/Footer";
import { Header } from "@/src/components/organisms/Header";
import { HomeHero } from "@/src/components/organisms/HomeHero";

export function HomePage() {
  return (
    <main className="bg-df-bg text-df-text min-h-screen overflow-hidden">
      <div className="min-h-screen bg-[linear-gradient(to_right,var(--df-grid-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--df-grid-secondary)_1px,transparent_1px)] bg-[size:64px_64px]">
        <Header />
        <HomeHero />
        <Footer />
      </div>
    </main>
  );
}
