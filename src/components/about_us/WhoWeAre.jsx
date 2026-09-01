import next from "next";
import  Reveal  from "@/components/shared/Reveal";



function WhoWeAre() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal y={30}>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/choose-us-left-img.png"
              alt="Students studying abroad"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="flex items-center gap-2 text-[var(--primary)] font-semibold text-sm uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              Who We Are
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-serif text-[var(--primary)] text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
              Your Trusted Partner in
              <br className="hidden sm:block" /> International Education
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-gray-500 mt-5 leading-relaxed">
              helps students and travelers navigate international education, visas, scholarships, and destinations with expert guidance and personalized support.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-gray-500 mt-4 leading-relaxed">
              We believe no talented Pakistani student should miss out on a scholarship or free education opportunity simply due to a lack of information or guidance. That's why we've supported over 100 students on their journey to study abroad, with accurate, up-to-date advice on universities, funding, and visas.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
