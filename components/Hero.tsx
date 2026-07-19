// components/Hero.tsx

import LanguageHeader from "./LanguageHeader";

export default function Hero() {
  return (
    <section className="text-center pt-32 pb-24">
      <LanguageHeader />

      <h1 className="text-6xl md:text-7xl mt-8">
        Carlos Vega
      </h1>

      <p className="mt-10 text-xl text-gray-600 max-w-2xl mx-auto">
        Researching the intersection of
        mathematics, law, and economics.
      </p>

      <div className="mt-12 flex justify-center gap-6">
        <a
          href="https://github.com/carlos-quant"
          target="_blank"
        >
          GitHub
        </a>

        <a
          href="https://medium.com/@carlos-quant"
          target="_blank"
        >
          Medium
        </a>

        <a href="#">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
