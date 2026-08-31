import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Articles } from "@/components/sections/Articles";
import { Faq } from "@/components/sections/Faq";
import { Consultation } from "@/components/sections/Consultation";

const title = "مكتب الجندي للمحاماة | استشارات قانونية في مصر";
const description =
  "مكتب محاماة مصري: قضايا جنائية وأسرية وتجارية وعقارية، تأسيس شركات وصياغة عقود. مراجعة أولية مجانية وعرض أتعاب واضح قبل البدء.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Articles />
        <Faq />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
