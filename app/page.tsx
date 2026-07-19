import Hero from "@/components/Hero";
import ResearchCard from "@/components/ResearchCard";
import ArticleCard from "@/components/ArticleCard";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mt-20">
        <SectionTitle title="Research" />

        <div className="grid md:grid-cols-2 gap-6">
          <ResearchCard
            title="Optimization"
            category="Mathematics"
            description="Numerical methods and optimization techniques."
          />

          <ResearchCard
            title="International Trade Law"
            category="Law"
            description="Legal frameworks governing trade and economic relations."
          />

          <ResearchCard
            title="Quantitative Finance"
            category="Finance"
            description="Risk, valuation, and mathematical finance."
          />

          <ResearchCard
            title="Economic Analysis of Law"
            category="Economics"
            description="Applying economic reasoning to legal systems."
          />
        </div>
      </section>

      <section className="mt-32">
        <SectionTitle title="Recent Articles" />

        <ArticleCard
          title="Economic Analysis of Surname Rights in Mexico"
          date="July 2026"
          readingTime="11 min"
        />

        <ArticleCard
          title="Optimization of Structural Concrete Design"
          date="June 2026"
          readingTime="14 min"
        />

        <ArticleCard
          title="Comparative Advantage and Trade Agreements"
          date="May 2026"
          readingTime="8 min"
        />
      </section>

      <section className="mt-32">
        <SectionTitle title="Reading Notes" />

        <div className="grid md:grid-cols-3 gap-4">
          <div>Axler</div>
          <div>Apostol</div>
          <div>Arfken</div>
          <div>Posner</div>
          <div>Samuelson</div>
          <div>Hayek</div>
        </div>
      </section>
    </>
  );
}
